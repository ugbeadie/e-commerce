const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navUl = document.getElementsByClassName('nav-items')[0];
const itemCount = document.getElementsByClassName('count')[0];
const minus = document.getElementsByClassName('minus')[0];
const plus = document.getElementsByClassName('plus')[0];

let count = 0;

toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('active');
    document.body.classList.toggle('hidden')
    document.body.classList.toggle("cross");
});

plus.addEventListener('click', () => {
    itemCount.textContent = count+=1;
})

minus.addEventListener('click', () => {
    if (count > 0) {
        itemCount.textContent = count-=1;
    }else {
        count = 0;
    }
})