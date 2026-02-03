import { supabase } from "./supabase.js";

async function loadData() {
    const { data, error } = await supabase.from("ramen_data").select("*");
    console.log("data:", data);
    console.log("error:", error);
    for (let i = 0; i < data.length; i++) {
        if (data[i].ramen_date) {
            let timeData = data[i].ramen_date.split("-");
            console.log(timeData);
        }
    }
}

loadData();
