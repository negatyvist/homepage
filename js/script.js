console.log("Hello!");

let mainSection = document.querySelector(".main__section");
let bodyButtonShowHide = document.querySelector(".js-body__buttonShowHide");
let bodyButtoRemove = document.querySelector(".js-body__buttonRemove");
let mainButton = document.querySelector(".js-main__button")
let mainImg = document.querySelector(".js-main__img")
let picOnePositive = "https://i.ibb.co/4FqZ8pc/111.jpg"
let picOneNegative = "https://i.ibb.co/jkNK4Ch/1.jpg"

mainButton.addEventListener("click", () => { mainImg.src = mainImg.src === picOnePositive ? picOneNegative : picOnePositive; })

bodyButtonShowHide.addEventListener("click", () => { mainSection.classList.toggle("main__section--showNone"); });

bodyButtoRemove.addEventListener("click", () => { mainSection.remove(); });