const supabaseUrl = "https://gcflelpasndsydtugmja.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjZmxlbHBhc25kc3lkdHVnbWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMDMwMTMsImV4cCI6MjA4MDY3OTAxM30.YlQYvRSJ8-7uJMb7OsoB8HbuQGT7hSZ-NJIW6Q2Xllk";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const ramen_view = document.querySelector(".ramen_view");

async function loadData() {
    const { data, error } = await supabase.from("ramen_data").select("*");
    console.log("data:", data);
    console.log("error:", error);
    // for (let i = 0; i < data.length; i++) {
    //     list.insertAdjacentHTML("beforeend", `<li> ${i + 1} : ${data[i].title}</li>`);
    //     list.insertAdjacentHTML("beforeend", `<img src="${data[i].image_url}">`);
    // }
}

loadData();
