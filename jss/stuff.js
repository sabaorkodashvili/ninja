"use strict";

const persons = [
  {
    id: 1,
    name: "John",
    lastName: "doe",
    age: 21,
    email: "johnDoe@gmail.com",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  },
  {
    id: 2,
    name: "Nate",
    lastName: "Jhonson",
    age: 37,
    email: "nate.jhopson@gmail.com",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/47.jpg",
  },
  {
    id: 3,
    name: "Mike",
    lastName: "tyson",
    age: 47,
    email: "mikeKillerTyson@gmail.com",
    avatar: "https://avatarfiles.alphacoders.com/312/thumb-312790.jpg",
  },
  {
    id: 4,
    name: "Daniel",
    lastName: "Murey",
    age: 29,
    email: "daniel@murey.com",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
  },
  {
    id: 5,
    name: "Chris",
    lastName: "Nollan",
    age: 38,
    email: "chris.nollan@gmail.com",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/72.jpg",
  },
];

const memberUl = document.querySelector("#memberUl");

for (let i = 0; i < persons.length; i++) {
  let member = persons[i];

  const memberDiv = document.createElement("li");
  memberDiv.className = "memberDiv";

  const p = document.createElement("p");
  p.textContent = `${member.name} ${member.lastName}`;
  p.className = "memberP";

  memberDiv.setAttribute("id", member.id);

  const img = document.createElement("img");
  img.setAttribute("src", member.avatar);

  //////

  const clickBtn = document.createElement("button");

  clickBtn.textContent = "click to contact";
  clickBtn.className = "email";
  ////

  const personMail = member.email;

  //   email.textContent = "show less";
  const emailText = document.createElement("p");
  emailText.textContent = personMail;
  //
  let isOpen = false;
  //
  clickBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      memberDiv.appendChild(emailText);
      clickBtn.textContent = "show less";
      emailText.classList.remove("hide");
    } else {
      emailText.classList.add("hide");
      clickBtn.textContent = "click to contact";
    }
  });

  memberDiv.appendChild(p);
  memberDiv.appendChild(img);
  memberDiv.appendChild(clickBtn);
  memberUl.appendChild(memberDiv);
}
