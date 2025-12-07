const supabaseUrl = "https://gcflelpasndsydtugmja.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjZmxlbHBhc25kc3lkdHVnbWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMDMwMTMsImV4cCI6MjA4MDY3OTAxM30.YlQYvRSJ8-7uJMb7OsoB8HbuQGT7hSZ-NJIW6Q2Xllk";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const inputPrice = document.querySelector("#total_price");

async function loadData() {
    const { data, error } = await supabase.from("ramen_data").select("ramen_price");
    const prices = data.map((e) => e.ramen_price);
    const totalPrice = prices.reduce((prev, current) => prev + current);
    console.log(totalPrice);
    inputPrice.textContent = `${totalPrice}円`;
}

loadData();
