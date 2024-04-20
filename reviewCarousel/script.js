const reviews = [
  {
    id: 1,
    profileImg: "./images/profile1.jpg",
    name: "User 1",
    designation: "Full Stack Intern",
    text: "Hi, this is the review for User 1.",
  },
  {
    id: 2,
    profileImg: "./images/profile2.png",
    name: "User 2",
    designation: "Project Manager",
    text: "Hi, this is the review for User 2.",
  },
  {
    id: 3,
    profileImg: "./images/profile3.jpg",
    name: "User 3",
    designation: "Data Scientist",
    text: "Hi, this is the review for User 3.",
  },
];

const profilePic = document.getElementById("profilePic");
const name = document.getElementById("name");
const designation = document.getElementById("designation");
const review = document.getElementById("review");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const surpriseBtn = document.querySelector("#surpriseBtn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  profilePic.src = item.profileImg;
  name.innerHTML = item.name;
  designation.innerHTML = item.designation;
  review.innerHTML = item.text;
}

prevBtn.addEventListener("click", () => {
  if (!currentItem) {
    alert("You are on the first review!");
  } else {
    currentItem--;
    showPerson(currentItem);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentItem >= reviews.length - 1) {
    alert("End of reviews!");
  } else {
    currentItem++;
    showPerson(currentItem);
  }
});

surpriseBtn.addEventListener("click", () => {
  console.log("Clicked!");
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log("Current Iten", currentItem);
  showPerson(currentItem);
});
