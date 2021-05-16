const swiper = new Swiper('.swiper-container', {
    autoplay:{delay: 2000},
  speed: 400,
  spaceBetween: 0,
  loop: 'true',
  effect: 'fade',
  });

  gsap.registerPlugin(ScrollTrigger);
  let timeout;
  let animation = document.querySelector('.sidebar-alt .sprite');

  gsap.to('#main',{
    scrollTrigger:{
      trigger:'#main',
      onUpdate:(e)=>{
        animation.classList.remove('idle');
        clearTimeout(timeout);
        timeout= setTimeout(()=>{
          animation.classList.add('idle')
          animation.classList.remove('down');
          animation.classList.remove('up');
        },250)
        
        if(e.direction ==1){
          animation.classList.add('down');
          animation.classList.remove('up');

        }if(e.direction==-1){
          animation.classList.remove('down');
          animation.classList.add('up');
        }
      }
    }
  })