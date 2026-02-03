import { supabase } from "./supabase.js";

const bucketName = "ramen_images";
const databaseName = "ramen_data";
const submitBtn = document.querySelector("#submit_btn");
const ramenImage = document.querySelector("#addPicture");
const textData = document.querySelector("#textData");
const ramenDate = document.querySelector("#ramenDate");
const ramenPrice = document.querySelector("#ramenPrice");

async function loadData() {
    const { data, error } = await supabase.from("ramen_data").select("*");
    console.log("data:", data);
    console.log("error:", error);
}

loadData();

submitBtn.addEventListener("click", async () => {
    let file = ramenImage.files[0];
    if (!file) {
        alert("画像を選択してください");
        // ここは将来的にない場合はそのまま通して画像をnotImageに差し替える
        return;
    }
    console.dir(file);
    const reFile = file.name.split(".").pop();
    const fileName = `${crypto.randomUUID()}.${reFile}`;
    console.log(fileName);
    const { data, error } = await supabase.storage.from(bucketName).upload(fileName, file);
    console.log("data:", data);
    console.log("error:", error);
    const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(fileName);
    console.log(urlData);
    await supabase.from(databaseName).insert({
        image_url: urlData.publicUrl,
        ramen_name: textData.value,
        ramen_price: ramenPrice,
        ramen_taste: ramenTaste.value,
        ramen_judge: ramenJudge.value,
    });
    if (error) {
        alert("error");
    } else {
        location.reload();
        alert("データが登録されました！");
    }
});
