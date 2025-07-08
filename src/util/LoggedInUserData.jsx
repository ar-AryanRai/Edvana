import React from "react";

const userList = [
  {
    name: "Aryan Rai",
    email: "rajaryan9560947575@gmail.com",
    password: "heloo123",
    completedCourses: [],
    enrolledCourses: [],
    notes: [],
  },

  {
    name: "Harsh Kumar",
    email: "702harsh@gmail.com",
    password: "heroku@1",
    completedCourses: [],
    enrolledCourses: [],
    notes: [],
  },

  {
    name: "octaman",
    email: "octaman436@gmail.com",
    password: "123456789",
    completedCourses: [],
    enrolledCourses: [],
    notes: [],
  },
];

export function setLocalStorage() {
  localStorage.setItem("userList", JSON.stringify(userList));
  localStorage.setItem("isLoggedIn", JSON.stringify(false));
  localStorage.setItem(
    "userData",
    JSON.stringify({
      name: "",
      email: "",
      password: "",
      completedCourses: [],
      enrolledCourses: [],
      notes: [],
    })
  );
}

export function getLocalStorage() {
  const userList = localStorage.getItem("userList");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userData = localStorage.getItem("userData");
  return {
    userList: JSON.parse(userList),
    isLoggedIn: JSON.parse(isLoggedIn),
    userData: JSON.parse(userData),
  };
}
