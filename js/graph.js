import { supabase } from "./supabase.js";

async function totalPrice() {
    const { data, error } = await supabase.from("ramen_data").select("ramen_price");
    console.log(data, error);
    let priceBox = [];
    for (let i = 0; i < data.length; i++) {
        priceBox.push(Number(data[i].ramen_price));
    }
    console.log(priceBox);
}

totalPrice();
