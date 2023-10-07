const quantity = document.getElementById("quantity");
const selection = document.getElementById("selection");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

// let price;

selection.addEventListener("input" , (e) => {
     price = e.target.value;
})

btn.addEventListener("click" , () => {
    let total = quantity.valueAsNumber * price;
    result.innerText = ` $ ${total}`;
    quantity.value = null;
})

