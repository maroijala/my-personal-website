const navTog = document.querySelector('.nav_toggle');

navTog.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


const navList = document.querySelector('.nav_items');

navList.addEventListener('click', () => {
    document.body.classList.toggle('nav-close');
});

