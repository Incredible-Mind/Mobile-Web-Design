const hamburger= document.querySelector('.hamburger');
const unorderlists = document.querySelector('.unorderlists')
hamburger.addEventListener("click", () => {
    unorderlists.classList.toggle('show');
})