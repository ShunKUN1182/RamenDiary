const textData = document.querySelector("#text_data");
const numberData = document.querySelector("#number_data");
const ramenTaste = document.querySelector("#ramen_taste");
const ramenJudge = document.querySelector("#ramen_judge");
const submitBtn = document.querySelector("#submit_btn");

const supabaseUrl = "https://gcflelpasndsydtugmja.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjZmxlbHBhc25kc3lkdHVnbWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMDMwMTMsImV4cCI6MjA4MDY3OTAxM30.YlQYvRSJ8-7uJMb7OsoB8HbuQGT7hSZ-NJIW6Q2Xllk";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// async function loadData() {
//     const { data, error } = await supabase.from("ramen_data").select("*");
//     console.log("data:", data);
//     console.log("error:", error);
// }
// loadData();

async function insertTest() {
    const { error } = await supabase.from("ramen_data").insert({
        ramen_name: textData.value,
        ramen_price: numberData.value,
        ramen_taste: ramenTaste.value,
        ramen_judge: ramenJudge.value,
    });
    if (error) {
        alert("error");
    } else {
        alert("データ追加成功");
    }
}

submitBtn.addEventListener("click", () => {
    insertTest();
    // console.log(ramenTaste.value, ramenJudge.value);
});
