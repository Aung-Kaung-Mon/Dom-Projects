const textInput = document.querySelector("#text-input");

const colorInput = document.querySelector("#color-input");

const sizeInput = document.querySelector("#size-input");

const output = document.querySelector("#output");

const inputFont = document.querySelector("#input-font");

//font family array

const fonts = [
  "Algerian",
  "Consolas",
  "Bodoni MT",
  "Informal Roman Regular",
  "Magneto Bold",
];

// const createOption = (text,value) => {
//     const option = document.createElement("option");
//     option.innerText = text;
//     option.value = value;
    
//     return option;
// }

fonts.forEach((font) => {
    inputFont.append(new Option(font,font));
})

textInput.addEventListener("keyup", () => {
  output.innerText = textInput.value;
});

colorInput.addEventListener("change", () => {
  output.style.color = colorInput.value;
});

sizeInput.addEventListener("change", () => {
  output.style.fontSize = sizeInput.value + "px";
});

inputFont.addEventListener("change", () => {
  output.style.fontFamily = inputFont.value;
});
