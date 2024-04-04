let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.oneclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:300, origin:'top'});
sr.reveal('.hero-image',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.new-image',{delay:450, origin:'top'});
sr.reveal('.heroc',{delay:450, origin:'bottom'});
sr.reveal('.herocp',{delay:450, origin:'bottom'});
sr.reveal('.imo',{delay:450, origin:'top'});