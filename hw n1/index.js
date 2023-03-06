/**
Homework number 1

Login functionality with the usage of the package colors
Create a function that accepts two params: username & password
If user exists in users array print the message : "User is logged in" in green text
If not: "User not found" in red text and yellow background */


let colors = require("colors");

let users = [
  {
    role: "admin",
    fullname: "John Doe",
    username: "qwerty",
    password: "123qwe",
  },
  {
    role: "client",
    fullName: "Bob Bobski",
    username: "asdasd",
    password: "zxczxc",
  },
];

const checkUser = (userName, pass) => {
  const found = users.some((item) => item.username === userName);
  if (found) {
    console.log(`User ${userName} found`.green);
  } else console.log(`User ${userName} NOT found`.bgYellow.red);
};

checkUser("qwerty");
checkUser("qwrty");
checkUser("Dejan");
