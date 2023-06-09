let generate = document.querySelector("#generate");
let text = document.querySelector("#text");
let copy = document.querySelector("#symbol");

generate.addEventListener("click", (e) => {
  e.preventDefault();

  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let symbol = "$%&#@!*&^~";
  let password = "";

  let length = 12;
  let allchars = upperCase + lowerCase + number + symbol;
  console.log(allchars.length);
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  text.value = password;
  text.style.color = "green";
  text.style.fontSize = "25px";
  text.readOnly = "true";
});

copy.addEventListener("click", () => {
  text.select();
  document.execCommand("copy");
});
