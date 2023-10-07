
const createForm = document.querySelector("#create-form");

createForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const data = new FormData(createForm);
    console.log(data.get("your_name"));
   console.log(data.get("your_email"));
   console.log(data.get("your_tel"));
    
})

const link = document.querySelector("#link");

link.addEventListener("click", (e) => {
   if(!window.confirm("Are you sure you want to visit porn-hub")){
    e.preventDefault();
   }
})




// const eventBtn = document.querySelector("#event-btn");

// const textInput = document.querySelector("#text-input");

// const selectInput = document.querySelector("#select-lang");

// textInput.addEventListener("focus" , () => {
//     console.log("FOCUS");
// })

// textInput.addEventListener("blur" , () => {
//     console.log("BLUR"); 
// })

// textInput.addEventListener("change" , () => {
//     console.log("You has changed");
// })

// selectInput.addEventListener("change" , () => {
//     console.log("Your select box's value has changed: " , selectInput.value);
// })

// textInput.addEventListener("change", () => {
//     console.log("You changed!" , textInput.files[0]);
// })

// textInput.addEventListener("keyup" , () => {
//     console.log("Ur key has released");
// })

// textInput.addEventListener("keydown" , () => {
//     console.log("Ur key has downed");
// })

// textInput.addEventListener("keypress" , () => {
//     console.log("Ur key has pressed");
// })

// eventBtn.addEventListener("click",() => {
//     console.log("You Click");
// })

// eventBtn.addEventListener("dblclick",() => {
//     console.log("You double Click");
// })

// eventBtn.addEventListener("mouseenter",() => {
//     console.log("Your mouse enter");
// })

// eventBtn.addEventListener("mouseout",() => {
//     console.log("Your mouse out");
// })