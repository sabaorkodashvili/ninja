"use strict";

const members = [
  {
    name: "Mick",
    username: "jhonson",
    email: "Jhonatan2002@gmail.com",
    experience: "work as a social marketer since 2019",
  },
  {
    name: "Mike",
    username: "Richardson",
    email: "Mike1980@gmail.com",
    experience: "work as a engineer since 2010",
  },
  {
    name: "Nate",
    username: "walker",
    email: "NateWalker@gmail.com",
    experience: "MMA fighter",
  },
];

const userinfo = document.querySelector(".userinfo");
for (let i = 0; i < members.length; i++) {
  const member = members[i];

  const memberCard = document.createElement("div");
  memberCard.className = "memberdiv";

  const name = document.createElement("h1");
  name.textContent = `${member.name}`;

  const username = document.createElement("h1");
  username.textContent = `${member.username}`;
  username.className = "username";

  const email = document.createElement("p");
  email.textContent = ` Email :${member.email}`;

  const experience = document.createElement("p");
  experience.textContent = ` Experience :${member.experience}`;

  memberCard.appendChild(name);
  memberCard.appendChild(username);
  memberCard.appendChild(email);
  memberCard.appendChild(experience);
  userinfo.appendChild(memberCard);
}

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newName = document.getElementById("name").value;
  const newUserName = document.getElementById("userName").value;
  const newEmail = document.getElementById("email").value;
  const newBody = document.getElementById("body").value;
  //
  const userCard = document.createElement("div");
  userCard.className = "memberdiv";
  //
  const memberName = document.createElement("h1");
  memberName.textContent = `${newName}`;

  const memberUserName = document.createElement("h1");
  memberUserName.textContent = `${newUserName}`;
  //
  const memberEmail = document.createElement("p");
  memberEmail.textContent = `${newEmail}`;
  //
  const memberBody = document.createElement("p");
  memberBody.textContent = `${newBody}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    userCard.remove();
  };

  userCard.appendChild(memberName);
  userCard.appendChild(memberUserName);
  userCard.appendChild(memberEmail);
  userCard.appendChild(memberBody);
  userCard.appendChild(deleteBtn);
  userinfo.appendChild(userCard);
});
