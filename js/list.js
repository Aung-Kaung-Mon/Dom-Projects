const app = document.querySelector("#app");
const textInput = document.querySelector("#input-text");
const addBtn = document.querySelector("#add-btn");
const doneListCounter = document.querySelector("#done-List");
const totalListCounter = document.querySelector("#total-List");
const lists = document.querySelector("#lists");
// const editBtn = document.querySelector("#edit-btn");

const getRanNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const makeRanId = (length) => {
  let char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let result = "";

  for (let i = 1; i <= length; i++) {
    result += char[getRanNum(0, char.length)];
  }

  return result;
};

const countList = () => {
  let totalList = lists.querySelectorAll(".list").length;
  totalListCounter.innerText = totalList;

  doneListCounter.innerText = lists.querySelectorAll(
    ".list-checker [type='checkbox']:checked "
  ).length;

  if (totalList === 0) {
    lists.innerHTML = `<div class="d-flex flex-column align-items-center empty-state">
    <h5 class="">There is no lists to show</h5>
  <div class="">
  <img src="../image/empty.svg" alt="" width="180" >
  </div>
  </div>`;
  } else {
    lists.querySelector(".empty-state")?.remove();
  }
};

const createList = (listText) => {
  let checkerId = makeRanId(10);

  const list = document.createElement("div");
  list.classList.add("list");
  list.classList.add("bounceInLeft");

  list.innerHTML = `<div
    class="p-2 mb-3 border border-1 border-primary d-flex justify-content-between align-items-center" 
  >
    <div class="form-check list-checker">
      <input type="checkbox" class="form-check-input" id="${checkerId}" />
      <label for="${checkerId}" class="form-check-label list-label">${listText}</label>
    </div>
    <div class="">
      <button class="btn btn-outline-primary edit-btn" >
        <i class="bi bi-pencil"></i>
      </button>
      <button class="btn btn-outline-primary del-btn" >
          <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>`;

  const delBtn = list.querySelector(".del-btn");
  delBtn.addEventListener("click", () => {
    const decision = window.confirm("Are you sure you want to delete?");
    if(decision){
      list.classList.add("fadeOutRight");
      list.addEventListener("animationend", () => {
        list.remove();
        countList();
      })
    }
  
  
  });

  const editBtn = list.querySelector(".edit-btn");
  const listLabel = list.querySelector(".list-label");

  const listChecker = list.querySelector(".list-checker");
  listChecker.addEventListener("click", () => {
    listLabel.classList.add("text-decoration-line-through");
    list.classList.add("shakeX");
    countList();
  });

  editBtn.addEventListener("click", () => {
    const editInput = document.createElement("input");
    editInput.value = listLabel.innerText;
    editInput.classList.add("form-control");

    listLabel.innerText = null;
    listLabel.append(editInput);
  });

  editBtn.addEventListener("blur", () => {
    listLabel.innerText = editInput.value;
  });

  return list;
};

addBtn.addEventListener("click", () => {
  const list = createList(textInput.value);
  lists.append(list);
  list.addEventListener("animationend", () => {
    list.classList.remove("bounceInLeft","shakeX");
  });
  countList();
  textInput.value = null;
});

// const g =  {
//   name : "Aung Kaung Mon",
//   age : 18

// }

// console.log(g.name.toLowerCase());
// console.log(g?.address?.toLowerCase());
