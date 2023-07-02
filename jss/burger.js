var burgerBtn = document.getElementById("burgerBtn");
var navEl = document.getElementById("navEl");

burgerBtn.addEventListener("click", () => {
  //   navEl.className = "show";
  navEl.classList.toggle("show");
});
