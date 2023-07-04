"use strict";
// import generateProducts from "./jss/data";
// import phoneInf from "./jss/phonesL";
const modal = document.querySelector("#info");
const closeModalButton = document.getElementById("closeModal");
const modalContainer = document.getElementById("modalContainer");

modal.addEventListener("click", () => {
  modalContainer.style.display = "block";
});
closeModalButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

const timeTag = document.querySelector("#timeTag");
const imgTag = document.querySelector("#dog-image");
let lastUpdate = new Date();

setInterval(() => {
  const now = new Date();
  const timeSince = Math.floor((now - lastUpdate) / 1000);
  // console.log(timeSince);
  timeTag.innerText = `Last time you clicked the button is ${timeSince} seconds`;
}, 1000);
////////////////////////////////////////////////////////////////

// const productsAPIURL = "https://dummyjson.com/products";
// const sortSelect = document.querySelector("#sort-by-select");
// let products;

// const sortByCategory = () => {
//   products.sort((a, b) => {
//     if (a.category > b.category) return 1;
//     if (a.category < b.category) return -1;
//     else return 0;
//   });
// };

// // const sortByPrice = () => {
// //   products.sort((a, b) => {
// //     return a.price - b.price;
// //   });
// // };

// // const sortByName = () => {
// //   products.sort((a, b) => {
// //     if (a.name > b.name) return 1;
// //     if (a.name < b.name) return -1;
// //     else return 0;
// //   });
// // };

// // const customSort = (key) => {
// //   products.sort((a, b) => {
// //     if (a[key] > b[key]) return 1;
// //     if (a[key] < b[key]) return -1;
// //     else return 0;
// //   });
// // };

// // sortSelect.onchange = (e) => {
// //   const selected = parseInt(e.target.value);

// //   switch (selected) {
// //     case 1:
// //       customSort("price");
// //       break;
// //     case 2:
// //       customSort("name");
// //       break;
// //     case 3:
// //       customSort("category");
// //       break;
// //   }
// //   renderProducts();
// // };

// const fetchData = async () => {
//   console.log("Fetching products from API");
//   const response = await fetch(productsAPIURL);
//   const data = await response.json();
//   return data;
// };

// const renderProducts = () => {
//   console.log("Rendering products!");
//   productsWrapperDiv.innerHTML = "";
//   for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     // destucturing
//     const { name, price, category } = product;
//     const productDiv = document.createElement("div");
//     productDiv.innerHTML = `<div class="card">
//               <div class="card-body">
//               <h5 class="card-title">${name}</h5>
//               <h6 class="card-subtitle mb-2 text-body-secondary">${category}</h6>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <p class="card-text text-success">${price}$</p>
//               </div>
//           </div>`;
//     productsWrapperDiv.appendChild(productDiv);
//   }
// };

// const insertProducts = async () => {
//   products = await fetchData();
//   renderProducts();
// };

// insertProducts();

const productsAPIURL = "https://dummyjson.com/products";
const selectbtn = document.querySelector("#selectbtn");
const productsWrapperDiv = document.querySelector("#products-wrapper");
const sortSelect = document.querySelector("#sort-by-select");

let value;
let item;
let product;
let userinfo;
let productPrice;

function renderProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      product = data.products;
      product.forEach((user) => {
        userinfo = user.images;
        item = user.title;
        productPrice = user.price;
        ////////////////////////////////
        const sortByPrice = () => {
          product.sort((a, b) => {
            return a.price - b.price;
          });
        };
        sortByPrice();

        userinfo.forEach((info) => {
          const productDiv = document.createElement("div");
          // <img class="img"  src="${info}" alt="product picture">
          if (user.price < 600) {
            user.hidden = true;
          }
          productDiv.innerHTML = `
          <div class="product">
          <h1 class="title">${user.title}</h1>
          
          <p class="decription"> Info :${user.description}</p>
          <h2 class="price"> <b>Price </b>:${user.price}$</h2>
          </div>
          `;
          productsWrapperDiv.appendChild(productDiv);
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
renderProducts();
sortSelect.addEventListener("change", (e) => {
  value = e.target.value;
  console.log(value);
  if (value === "2") {
    console.log("clicked price");
    // sortByPrice();
    renderProducts();
  }
});
