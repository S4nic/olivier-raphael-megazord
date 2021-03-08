const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination', 
        type: 'bullets', 
        bulletActiveClass: 'bullet-active',
    },
});