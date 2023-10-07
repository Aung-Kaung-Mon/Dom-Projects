const recordForm = document.querySelector("#record-form");

const productSelect = document.querySelector("#product-select");

const recordBtn = document.querySelector("#record-btn");

const recordRows = document.querySelector("#record-rows");

const totalCost = document.querySelector("#total-cost");

const ofCanProducts = document.querySelector("#offcanvas-products");

const newItemForm = document.querySelector("#new-item-form");

// variables

const products = [
  {
    id: 1,
    name: "Graphic Design",
    price: 300,
  },

  {
    id: 2,
    name: "Web Design",
    price: 500,
  },

  {
    id: 3,
    name: "Web Development",
    price: 700,
  },

  {
    id: 4,
    name: "Application Development",
    price: 1000,
  },
];

// functions

const updateRecord = ({id,price}, quantity) => {
  const row = document.querySelector(`[row-product-id="${id}"]`);
  const rowQuantity = row.querySelector(".row-quantity");
  const rowCost = row.querySelector(".row-cost");

  if (rowQuantity.innerText >= 0 && quantity >= 0) {
    rowQuantity.innerText =
      parseInt(rowQuantity.innerText) + parseInt(quantity);
    rowCost.innerText = rowQuantity.innerText * price;
    getTotalCost();
  }
};

const createRecordRows = ({id,name,price}, quantity) => {
  const tr = document.createElement("tr");
  if (quantity > 0) {
    let cost = price * quantity;
    tr.innerHTML = `
   
    <td class="row-num"></td>
    <td class="">${name} </td>
    <td >${price}</td>
    <td class="row-quantity-control">
      <i class="bi bi-plus row-quantity-increment  bg-secondary-subtle p-1 "></i>
      <span class="row-quantity ms-1 me-1">${quantity}</span>
      <i class="bi bi-dash row-quantity-decrement  bg-secondary-subtle p-1"></i>
    </td>
    <td class="row-control">
      <span class="row-cost ">${cost}</span>
      <button class="btn btn-sm btn-primary row-delete">
      <i class="bi bi-trash"></i>
      </button>
    </td>
    
    `;
  }

  tr.classList.add("record-row");
  tr.setAttribute("row-product-id", id);

  const rowDelete = tr.querySelector(".row-delete");
  rowDelete.addEventListener("click", () => {
    window.confirm("Are you sure you want to delete?") && tr.remove();
    getTotalCost();
  });

  const rowQuantityIncrement = tr.querySelector(".row-quantity-increment");
  const rowQuantityDecrement = tr.querySelector(".row-quantity-decrement");

  rowQuantityDecrement.addEventListener("click", () => {
    const row = document.querySelector(`[row-product-id="${id}"]`);
    const rowQuantity = row.querySelector(".row-quantity");
    const rowCost = row.querySelector(".row-cost");

    if (rowQuantity.innerText > 0) {
      rowQuantity.innerText = parseInt(rowQuantity.innerText) - 1;
      rowCost.innerText = rowQuantity.innerText * price;
      getTotalCost();
    }
  });

  rowQuantityIncrement.addEventListener("click", () => {
    updateRecord({id,price}, 1);
  });

  if (quantity > 0) {
    return tr;
  }
};

const getTotalCost = () => {
  // let total = 0;
  // const costs = document.querySelectorAll(".cost");
  // costs.forEach((cost) => {
  //   total += parseFloat(cost.innerText);
  // });

  const costs = document.querySelectorAll(".row-cost");

  let total = [...costs].reduce((pv, cv) => pv + parseFloat(cv.innerText), 0);
  totalCost.innerText = total;
};

const createOffCanProducts = (name, cost) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item", "offcanvas-product");
  li.innerHTML = `
  <div class="d-flex justify-content-between align-items-center">
    <div class="offProductName">${name}</div>
    <div class="offProductCost"><span class="">${cost}</span> MMK</div>
  </div>
  `;

  return li;
};

// process

products.forEach(({id,name}) => {
  productSelect.append(new Option(name, id));
});

products.forEach(({name,price}) => {
  ofCanProducts.append(createOffCanProducts(name, price));
});

recordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(recordForm);

  let currentProduct = products.find((product) => {
    return product.id == data.get("product-select");
  });

  const existedProduct = document.querySelector(
    `[row-product-id='${currentProduct.id}']`
  );

  if (existedProduct) {
    updateRecord(currentProduct, data.get("product-quantity"));
  } else {
    recordRows.append(
      createRecordRows(currentProduct, data.get("product-quantity"))
    );
  }

  recordForm.reset();
  getTotalCost();
});

newItemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(newItemForm);

  const newProduct = {};
  newProduct.id = products[products.length - 1].id + 1;
  newProduct.name = data.get("new-item-name");
  newProduct.price = data.get("new-item-price");
  products.push(newProduct);

  ofCanProducts.append(
    createOffCanProducts(data.get("new-item-name"), data.get("new-item-price"))
  );

  productSelect.append(new Option(newProduct.name, newProduct.id));

  newItemForm.reset();
});
