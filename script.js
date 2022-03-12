const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navUl = document.getElementsByClassName('nav-items')[0];

toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('active');
    // navMenu.classList.toggle('active')
    document.body.classList.toggle('hidden')
    // document.body.classList.toggle("black");
    document.body.classList.toggle("cross");
})