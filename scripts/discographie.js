const swiper = new Swiper('.swiper-container', {
    autoplay:{delay: 2000},
  speed: 400,
  spaceBetween: 0,
  loop: 'true',
  effect: 'fade',
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to('#main'),{
    ScrollTrigger:{
      markers:true,
      trigger:'#main',
      onUpdate:(e)=>{
        Animation.classList.add(.idle);
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
          Animation.classList.remove('idle')
        },250)

        if(e.direction ==1){
          Animation.classList.add('down');
          Animation.classList.remove('up')
        }
      }
    }
  }