{
    const welcome = () => console.log("Hello!");

    const changeImage = () => {
        const mainButton = document.querySelector(".js-main__button")
        const mainImg = document.querySelector(".js-main__img")
        const picOnePositive = "https://i.ibb.co/4FqZ8pc/111.jpg"
        const picOneNegative = "https://i.ibb.co/jkNK4Ch/1.jpg"

        mainButton.addEventListener("click", () => { mainImg.src = mainImg.src === picOnePositive ? picOneNegative : picOnePositive; })
    }

    const showHideMainSection = (mainSection) => {
        const bodyButtonShowHide = document.querySelector(".js-body__buttonShowHide");

        bodyButtonShowHide.addEventListener("click", () => { mainSection.classList.toggle("main__section--showNone"); });
    }

    const removeMainSection = (mainSection) => {
        const bodyButtoRemove = document.querySelector(".js-body__buttonRemove");

        bodyButtoRemove.addEventListener("click", () => { mainSection.remove(); });
    }

    const init = () => {
        const mainSection = document.querySelector(".main__section");

        welcome();
        changeImage();
        showHideMainSection(mainSection);
        removeMainSection(mainSection);
    }

    init();
}