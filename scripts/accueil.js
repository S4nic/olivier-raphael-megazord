const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination', 
        type: 'bullets', 
        bulletActiveClass: 'bullet-active',
    },
});

gsap.registerPlugin(ScrollTrigger);
let timeout;
let animation = document.querySelector('.sidebar .sprite');

gsap.to('.sidebar', {
    scrollTrigger: {
        markers: true,
        trigger: '.sidebar',
        onUpdate: (e) => {
            animation.classList.remove('idle');
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                animation.classList.add('idle')
            }, 250)

            if (e.direction == 1) {
                animation.classList.add('down');
                animation.classList.remove('up');
            }
            if(e.direction == -1) {
                animation.classList.remove('down');
                animation.classList.add('up');
            }
        }
    }
})