const from = document.querySelector("#from");
const to = document.querySelector("#to");
const result = document.querySelector("#result");
const amount = document.querySelector("#amount");
const btn = document.querySelector("#btn");

const cur = {
  usd: 1,
  kyat: 2100,
  pound: 0.79,
  sg: 1.36,
};

console.log(from.value);

btn.addEventListener("click", () => {
  let total = (cur[to.value] * amount.valueAsNumber) / cur[from.value];

  result.innerText = `${total.toFixed(3)}-${to.value}`;
});
