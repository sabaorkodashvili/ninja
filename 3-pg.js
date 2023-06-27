const users = [
  {
    username: "saba",
    bio: "saba is a pet owner",
    balance: 2000,
    password: "password",
  },
  {
    username: "gio",
    bio: "gio is 5 pet owner",
    balance: 4500,
    password: "password",
  },
];
const checkLogin = (username, password) => {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.username == username && user.password == password) return user;
  }
  return null;
};

const mainDiv = document.querySelector(".mainDiv");
const signBtn = document.querySelector("#signBtn");
const mainButton = document.querySelector("#mainButton");
// const signUpForm = document.querySelector("#signup-form");
const loginElement = {
  usernameInput: mainDiv.querySelector("#username-input"),
  passwordInput: mainDiv.querySelector("#password-input"),
  loginForm: mainDiv.querySelector(".signup-form"),
};

const accountView = document.getElementById("account-view");
const accountViewElements = {
  usernameDisplay: accountView.querySelector("#username-display"),
  bioDisplay: accountView.querySelector("#user-bio-display"),
  balanceDisplay: accountView.querySelector("#user-balance-display"),
};
// console.log(usernameDisplay);
loginElement.loginForm.onsubmit = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const { usernameInput, passwordInput } = loginElement;
  const user = checkLogin(usernameInput.value, passwordInput.value);

  if (!user) {
    usernameInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
    return;
  }

  accountView.hidden = false;
  mainDiv.hidden = true;
  signBtn.hidden = true;
  mainButton.hidden = false;

  const { usernameDisplay, bioDisplay, balanceDisplay } = accountViewElements;
  usernameDisplay.innerText = user.username;
  bioDisplay.innerText = user.bio;
  balanceDisplay.innerText = user.balance;
};
