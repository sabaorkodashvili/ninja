"use strict";

const modal = document.querySelector("#info");
const closeModalButton = document.getElementById("closeModal");
const modalContainer = document.getElementById("modalContainer");

modal.addEventListener("click", () => {
  modalContainer.style.display = "block";
});
closeModalButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

// const timeTag = document.querySelector("#timeTag");
// const imgTag = document.querySelector("#dog-image");
// let lastUpdate = new Date();

// setInterval(() => {
//   const now = new Date();
//   const timeSince = Math.floor((now - lastUpdate) / 1000);
//   // console.log(timeSince);
//   timeTag.innerText = `Last time you clicked the button is ${timeSince} seconds`;
// }, 1000);
// const selectbtn = document.querySelector("#selectbtn");
////////////////////////////////////////////////////////////////

const productsAPIURL = "https://dummyjson.com/products";
const productsWrapperDiv = document.querySelector("#products-wrapper");
const sortSelect = document.querySelector("#sort-by-select");

let products;
let productInfo;
let users = [];
const sortByPrice = () => {
  products.sort((a, b) => {
    return a.price - b.price;
  });
};
const sortByName = () => {
  products.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    else return 0;
  });
};

const customSort = (key) => {
  products.sort((a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    else return 0;
  });
};

sortSelect.onchange = (e) => {
  const selected = parseInt(e.target.value);

  switch (selected) {
    case 1:
      customSort("price");
      break;
    case 2:
      customSort("title");
      break;
  }
  renderProducts();
};

const fetchData = async () => {
  console.log("Fetching products from API");
  const response = await fetch(productsAPIURL);
  const data = await response.json();
  users = data.products;
  return data.products;
};

const renderProducts = () => {
  console.log("Rendering products!");
  productsWrapperDiv.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    const { title, price, description } = product;
    const productDiv = document.createElement("div");
    let imgsUrl = product.images;
    console.log(product.images);
    ///
    imgsUrl.forEach((url) => {
      console.log(url);
      productDiv.innerHTML = `
      <div class="product">
      <h1 class="title">${title}</h1>
      <img class="img"  src="${url}" alt="product picture">
      <p class="decription"> Info :${description}</p>
      <h2 class="price"> <b>Price </b>:${price}$</h2>
      </div>
      `;
      productsWrapperDiv.appendChild(productDiv);
    });
  }
};

const insertProducts = async () => {
  products = await fetchData();
  renderProducts();
};
insertProducts();
