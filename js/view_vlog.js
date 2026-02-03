import { supabase } from "./supabase.js";

async function loadData() {
    const { data, error } = await supabase.from("ramen_data").select("*");
    console.log("data:", data);
    console.log("error:", error);
    for (let i = 0; i < data.length; i++) {
        let timeData = data[i].created_at.split("T");
        timeData = timeData[0].split("-");
        console.log(timeData);
    }
}

loadData();
