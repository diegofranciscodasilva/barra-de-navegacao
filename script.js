const navToggle = document.querySelector('.navtoggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
    links.classList.toggle('showlinks')
})