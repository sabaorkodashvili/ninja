const users = [
  {
    username: "gio",
    bio: "Hello Gio",
    balance: 4500,
    email: "gio@gmail.com",
    password: "password",
    location: "London",
    info: "Front end developer",
  },
  {
    username: "saba",
    bio: "hello Saba ",
    password: "password",
    email: "saba@gmail.com",
    balance: 2000,
    location: "New York",
    info: "Student",
  },
  {
    username: "nika",
    bio: "Hello Nika",
    balance: 3780,
    email: "nika@gmail.com",
    password: "password",
    location: "Canada",
    info: "fullstack developer",
  },
];
const mysecretNumber = 7;
window.localStorage.setItem("sn", mysecretNumber);
console.log(window.localStorage);

const loginViewElements = {
  usernameInput: document.querySelector("#username-input"),
  passwordInput: document.querySelector("#password-input"),
  emailInput: document.querySelector("#email"),
  form: document.querySelector(".signup-form"),
};
const hiddenDiv = document.querySelector(".profile");
const signBtn = document.querySelector("#signBtn");

//// hidden div
const profile = document.querySelector(".profile");
const accountViewElement = {
  userBio: document.querySelector(".userBio"),
  email: document.querySelector(".email"),
  userBalance: document.querySelector(".userBalance"),
  userInfo: document.querySelector(".userInfo"),
  location: document.querySelector(".location"),
};
//
let user;
let correctUser;
function login(username, password) {
  for (let i = 0; i < users.length; i++) {
    user = users[i];
    const { usernameInput, passwordInput, form } = loginViewElements;
    if (
      usernameInput.value === user.username &&
      passwordInput.value === user.password
    ) {
      return user; // Successful login
    } else {
      // window.location.href = "products.html";
      return false; // Invalid username or password
    }
  }
}

loginViewElements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameMessages = [];
  let passworMessage = [];
  const { usernameInput, passwordInput, form } = loginViewElements;
  const { userBio, email, location, userInfo, userBalance } =
    accountViewElement;

  // account info

  const passwordErrorElement = document.querySelector("#passwordError");
  const invalid = document.querySelector("#invalid");
  const NameErrorElement = document.querySelector("#nameError");

  // username required
  if (usernameInput.value === "" || usernameInput.value === null) {
    nameMessages.push("Name is required!");
  }
  if (nameMessages.length > 0) {
    // e.preventDefault();
    NameErrorElement.innerText = nameMessages.join(",");
  } else {
    NameErrorElement.innerText = "";
  }
  // user password is required
  if (passwordInput.value === "" || passwordInput.value === null) {
    passworMessage.push("Password is required!");
  }
  if (passworMessage.length > 0) {
    // e.preventDefault();
    passwordErrorElement.innerText = passworMessage.join(",");
  } else {
    passwordErrorElement.innerText = "";
  }
  if (login(usernameInput.value, passwordInput.value)) {
    const username = usernameInput.value;
    const password = passwordInput.value;
    console.log(localStorage.setItem("password", password));
    localStorage.setItem("username", user);
    localStorage.setItem("password", password);

    hiddenDiv.hidden = false;
    hiddenDiv.style.display = "flex";
    form.hidden = true;
    form.style.visibility = "";
    signBtn.hidden = true;
    // user info
    userBio.textContent = ` Hello ${user.username}`;
    email.textContent = `  ${user.email} `;
    location.textContent = `${user.location}`;
    userInfo.textContent = `${user.info}`;
    userBalance.textContent = ` ${user.balance} $`;

    // console.log(user);
    ///
  } else if (usernameInput.value > "" && passwordInput.value > "") {
    invalid.textContent = "invalid username or password";
  }
});
// }
const storedUsername = window.localStorage.getItem("username");
const storedPassword = window.localStorage.getItem("password");
