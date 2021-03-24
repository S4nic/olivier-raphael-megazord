gsap.registerPlugin(ScrollTrigger);

let sections = document.querySelectorAll('.section');

sections.forEach(section => {
   let title = section.querySelectorAll('#title');
   let card = section.querySelectorAll('.card');
   let carousel = section.querySelector('.swiper-container');
   let video = section.querySelector('iframe');

   let list = section.querySelector('#list');
   let img = section.querySelector('#img_disco');


   gsap.timeline({
       scrollTrigger: {
           start: 'top 60%', 
           trigger: section,
           toggleActions: 'play none none reverse',
       }
   })
   .from(title, 
                    {x: -25, opacity: 0})
    .from(card,
                    {y: 25, opacity: 0}, '-= 0.1')
    .from(carousel,
                    {y: 25, opacity: 0}, '-= 0.3')
    .from(video,
                    {y: 25, opacity: 0}, '-= 0.3')
    .from(list,
                    {y: 25, opacity: 0}, '-= 0.3')
    .from(img,
                    {x: 25, opacity: 0}, '-= 0.3')
});