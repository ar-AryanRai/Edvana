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

const defaultUserData = {
      name: "",
      email: "",
      password: "",
      completedCourses: [],
      enrolledCourses: [],
      notes: [],
    }

export function setLocalStorage() {
  if (typeof window !== "undefined") {
    if (!localStorage.getItem("userList")) {
      localStorage.setItem("userList", JSON.stringify(userList));
    }
    if (!localStorage.getItem("isLoggedIn")) {
      localStorage.setItem("isLoggedIn", JSON.stringify(false));
    }
    if (!localStorage.getItem("userData")) {
      localStorage.setItem("userData", JSON.stringify(defaultUserData));
    }
  }
  // localStorage.setItem("userList", JSON.stringify(userList));
  // localStorage.setItem("isLoggedIn", JSON.stringify(false));
  // localStorage.setItem("userData", JSON.stringify(defaultUserData));
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

  if (typeof window === "undefined") return {
    userList: [],
    isLoggedIn: false,
    userData: defaultUserData,
  };

  const userListStr = localStorage.getItem("userList");
  const isLoggedInStr = localStorage.getItem("isLoggedIn");
  const userDataStr = localStorage.getItem("userData");

  return {
    userList: userListStr ? JSON.parse(userListStr) : [],
    isLoggedIn: isLoggedInStr ? JSON.parse(isLoggedInStr) : false,
    userData: userDataStr ? JSON.parse(userDataStr) : defaultUserData,
  };
}
