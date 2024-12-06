// variables

let header = document.querySelector("header");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let white = document.querySelector(".white");
let black = document.querySelector(".black");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let orange = document.querySelector(".orange");
let blue = document.querySelector(".blue");
let yellow = document.querySelector(".yellow");
let purple = document.querySelector(".purple");
let pink = document.querySelector(".pink");
let choix = document.querySelector(".choix");

let theme = localStorage.getItem("theme");

// localStorage choix du thème
if (theme === "white") {
  colorWhite();
} else if (theme === "black") {
  colorBlack();
} else if (theme === "red") {
  colorRed();
} else if (theme === "green") {
  colorGreen();
} else if (theme === "blue") {
  colorBlue();
} else if (theme === "yellow") {
  colorYellow();
} else if (theme === "orange") {
  colorOrange();
} else if (theme === "purple") {
  colorPurple();
} else if (theme === "pink") {
  colorPink();
}

// function

function colorWhite() {
  header.style.backgroundColor = "#0a3981";
  header.style.color = "white";
  document.body.style.backgroundColor = "white";
  p.style.color = "black";
  h2.style.color = "black";
  choix.style.color = "black";
  localStorage.setItem("theme", "white");
}

function colorBlack() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "black";
  p.style.color = "white";
  h2.style.color = "white";
  choix.style.color = "white";
  localStorage.setItem("theme", "black");
}

function colorRed() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "red";
  p.style.color = "white";
  h2.style.color = "white";
  choix.style.color = "white";
  localStorage.setItem("theme", "red");
}

function colorGreen() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "green";
  p.style.color = "white";
  h2.style.color = "white";
  choix.style.color = "white";
  green.style.borderColor = "white";
  localStorage.setItem("theme", "green");
}

function colorBlue() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "blue";
  p.style.color = "white";
  h2.style.color = "white";
  choix.style.color = "white";
  blue.style.color = "white";
  blue.style.borderColor = "white";
  localStorage.setItem("theme", "blue");
}

function colorYellow() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "yellow";
  p.style.color = "black";
  h2.style.color = "black";
  choix.style.color = "black";
  yellow.style.borderColor = "white";
  localStorage.setItem("theme", "yellow");
}

function colorOrange() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "orange";
  p.style.color = "black";
  h2.style.color = "black";
  choix.style.color = "black";
  orange.style.borderColor = "white";
  localStorage.setItem("theme", "orange");
}

function colorPurple() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "purple";
  p.style.color = "white";
  h2.style.color = "white";
  choix.style.color = "white";
  purple.style.borderColor = "white";
  localStorage.setItem("theme", "purple");
}

function colorPink() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "pink";
  p.style.color = "black";
  h2.style.color = "black";
  choix.style.color = "black";
  pink.style.borderColor = "white";
  localStorage.setItem("theme", "pink");
}

// events

white.addEventListener("click", colorWhite);
black.addEventListener("click", colorBlack);
red.addEventListener("click", colorRed);
green.addEventListener("click", colorGreen);
blue.addEventListener("click", colorBlue);
yellow.addEventListener("click", colorYellow);
orange.addEventListener("click", colorOrange);
purple.addEventListener("click", colorPurple);
pink.addEventListener("click", colorPink);
