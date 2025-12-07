const supabaseUrl = "https://gcflelpasndsydtugmja.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjZmxlbHBhc25kc3lkdHVnbWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMDMwMTMsImV4cCI6MjA4MDY3OTAxM30.YlQYvRSJ8-7uJMb7OsoB8HbuQGT7hSZ-NJIW6Q2Xllk";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const ramenView = document.querySelector(".ramen_view");

async function loadData() {
    const { data, error } = await supabase.from("ramen_data").select("*");
    console.log("data:", data);
    console.log("error:", error);
    for (let i = 0; i < data.length; i++) {
        ramenView.insertAdjacentHTML(
            "afterbegin",
            `
                      <div class="ramen_data">
                        <img src="${data[i].image_url}" alt="" width="100" height="100"/>
                        <div>
                            <h2>${data[i].ramen_name}</h2>
                            <h3>評価：${data[i].ramen_judge}</h3>
                            <h3>${data[i].ramen_price}円分食べました</h3>
                        </div>
                    </div>
                  `
        );
    }
}

loadData();
