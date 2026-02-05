import { supabase } from "./supabase.js";

const ramenCount = document.querySelector("#ramenCount");
const priceOutput = document.querySelector("#totalPrice");

async function totalPrice() {
    const { data, error } = await supabase.from("ramen_data").select("ramen_price");
    console.log(data, error);
    ramenCount.innerHTML = data.length;
    let priceBox = [];
    for (let i = 0; i < data.length; i++) {
        priceBox.push(Number(data[i].ramen_price));
    }
    const totalPrice = priceBox.reduce((current, currentVal) => {
        return current + currentVal;
    });
    priceOutput.innerHTML = totalPrice;
}

totalPrice();
