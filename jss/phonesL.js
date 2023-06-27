const phoneInf = (phone) => {
  const phoneDiv = document.createElement("div");
  phoneDiv.classList.add("col");
  phoneDiv.classList.add("p-0");

  phoneDiv.innerHTML = `<div class="phone-info">
    <img src="./assets/img/phone.webp" alt="${phone.name}">
    <div class="phone-body">
    <h5 class="phone-title">${phone.name}</h5>
    <p class="phone-text">${phone.price} USD</p>
    </div>
    </div>

    `;
  return phoneDiv;
};

export default phoneInf;
