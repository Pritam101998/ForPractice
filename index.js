const Main = document.querySelector(".main");
const Username = document.querySelector(".username");
const PassWord = document.querySelector(".Password");
const para = document.querySelector(".p");
const LoGin = document.querySelector(".Login");

LoGin.addEventListener("click", () => {
  console.log("Hi");
  if (Username.value == "Pritam" && PassWord.value == "Pritam98@") {
    Main.style.display = "none";
    para.style.display = "flex";
    console.log(Username.value);
  }
});
