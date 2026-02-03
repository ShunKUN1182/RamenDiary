import { supabase } from "./supabase.js";

const bucketName = "ramen_images";
const submitBtn = document.querySelector("#submit_btn");
const ramenImage = document.querySelector("#addPicture");

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
});
