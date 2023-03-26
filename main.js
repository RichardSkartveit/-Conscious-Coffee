const hamburger = document.querySelector('.hamburger');
let bar = false;
hamburger.addEventListener('click', () => {
    if(!bar) {
        hamburger.classList.add('open');
        bar = true;
    } else {
        hamburger.classList.remove('open');
        bar = false;
    }
});


/**
 menubtn = hamburger
 Menuopen = bar
 */