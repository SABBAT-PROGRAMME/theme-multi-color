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

// function

function colorWhite() {
  header.style.backgroundColor = "#0a3981";
  header.style.color = "white";
  document.body.style.backgroundColor = "white";
  p.style.color = "black";
  h2.style.color = "black";
  choix.style.color = "black";
}

function colorBlack() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "black";
  p.style.color = "white";
  h2.style.color = "white";
  choix.style.color = "white";
}

function colorRed() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "red";
  p.style.color = "white";
  h2.style.color = "white";
  choix.style.color = "white";
}

function colorGreen() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "green";
  p.style.color = "white";
  h2.style.color = "white";
  choix.style.color = "white";
  green.style.borderColor = "white";
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
}

function colorYellow() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "yellow";
  p.style.color = "black";
  h2.style.color = "black";
  choix.style.color = "black";
  yellow.style.borderColor = "white";
}

function colorOrange() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "orange";
  p.style.color = "black";
  h2.style.color = "black";
  choix.style.color = "black";
  orange.style.borderColor = "white";
}

function colorPurple() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "purple";
  p.style.color = "white";
  h2.style.color = "white";
  choix.style.color = "white";
  purple.style.borderColor = "white";
}

function colorPink() {
  document.body.style = header.style.backgroundColor = "white";
  header.style.color = "#0a3981";
  document.body.style.backgroundColor = "pink";
  p.style.color = "black";
  h2.style.color = "black";
  choix.style.color = "black";
  pink.style.borderColor = "white";
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
