// Add custom JavaScript here
function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
        }
        else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-sticky');
        }
    });
}

function updateSize() {
    width = window.innerWidth;
    console.log(width);
    navbar = document.querySelector('.navbar');
    if (width < 992) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
}

document.addEventListener('DOMContentLoaded', userScroll);
window.addEventListener('resize', updateSize);