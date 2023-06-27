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

const searchbtn = document.querySelector("#searchbtn");
const productsdiv = document.querySelector("#productsdiv");

const renderPhones = () => {
  const phones = generateProducts();
  productsdiv.innerHTML = "";

  phones.forEach((phone) => {
    productsdiv.appendChild(phoneInf(phone));
  });
};

// searchbtn.onclick = renderPhones;

const timeTag = document.querySelector("#timeTag");
const imgTag = document.querySelector("#dog-image");
let lastUpdate = new Date();

const giveMeDogImageURL = async () => {
  const response = await fetch("https://random.dog/woof.json");
  const data = await response.json();
  return data.url;
};

searchbtn.onclick = async (e) => {
  const url = await giveMeDogImageURL();
  imgTag.src = url;

  lastUpdate = new Date();
  timeTag.hidden = false;
};

setInterval(() => {
  const now = new Date();
  const timeSince = Math.floor((now - lastUpdate) / 1000);
  // console.log(timeSince);
  timeTag.innerText = `Last time you clicked the button is ${timeSince} seconds`;
}, 1000);
