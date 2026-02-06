import { supabase } from "./supabase.js";

const ramenCount = document.querySelector("#ramenCount");
const priceOutput = document.querySelector("#totalPrice");
const ctx = document.getElementById("tasteChart");

async function totalPrice() {
    const { data, error } = await supabase.from("ramen_data").select("ramen_price");

    if (error) {
        console.log(error);
        return;
    }

    ramenCount.innerHTML = data.length;

    let priceBox = [];
    for (let i = 0; i < data.length; i++) {
        priceBox.push(Number(data[i].ramen_price));
    }

    const totalPrice = priceBox.reduce((current, currentVal) => {
        return current + currentVal;
    }, 0);

    priceOutput.innerHTML = totalPrice;
}

totalPrice();

async function tasteChart() {
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["赤", "緑", "青"],
            datasets: [
                {
                    label: "hello",
                    data: [12, 19, 9],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

tasteChart();
// async function tasteGraph() {
//     const { data, error } = await supabase.from("ramen_data").select("ramen_taste");

//     if (error) {
//         console.log(error);
//         return;
//     }

//     // tasteを集計する
//     const tasteCount = {};

//     data.forEach((item) => {
//         const taste = item.ramen_taste;

//         if (tasteCount[taste]) {
//             tasteCount[taste]++;
//         } else {
//             tasteCount[taste] = 1;
//         }
//     });

//     const labels = Object.keys(tasteCount);
//     const values = Object.values(tasteCount);

//     new Chart(ctx, {
//         type: "doughnut", // 円グラフなら "pie" でもOK
//         data: {
//             labels: labels,
//             datasets: [
//                 {
//                     label: "ラーメンの味",
//                     data: values,
//                     borderWidth: 2,
//                 },
//             ],
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: {
//                     position: "bottom",
//                 },
//             },
//         },
//     });
// }
