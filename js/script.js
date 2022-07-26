function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

AOS.init({
    duration: 1200,
})

// Cookei alert
function setCookie() {
    console.log('set browser cookie');
    document.querySelector('.cookie').style.display = 'none';
}