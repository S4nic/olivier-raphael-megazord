gsap.registerPlugin(ScrollTrigger);

let sections = document.querySelectorAll('.section');

sections.forEach(section => {
    //accueil
   let title = section.querySelectorAll('#title');
   let card = section.querySelectorAll('.card');
   let carousel = section.querySelector('.swiper-container');
   let video = section.querySelector('iframe');

   //discographie
   let list = section.querySelector('#list');
   let img = section.querySelector('#img_disco');
   let btn = section.querySelector('#btn_list')

   gsap.timeline({
       scrollTrigger: {
           start: 'top 70%',
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
    .from(btn,
                    {y: 25, opacity: 0}, '-= 0.3')
});


//QUESTIONS
let modal = document.querySelector('.modal-body.quiz');
let questions = [
  {
    q: "Quel est le pays d'origine de TWRP?",
    o1: "États-unis",
    o2: "France",
    o3: "Japon",
    o4: "Canada",
    r: 4
  },
  {
    q: "Que veux-dire T.W.R.P ?",
    o1: "Topping Wars Ram Princess",
    o2: "Tupper Ware Remix Party",
    o3: "Things Worn Ring Ping",
    o4: "Trip Wheel Red Party",
    r: 2
  },
  {
    q: "Quel groupe a collaboré avec TWRP sur un album ?",
    o1: "Katy Perry",
    o2: "Aerosmith",
    o3: "Ninja sex party",
    o4: "Bombustron",
    r: 3
  },
  {
    q: "Combien de membres ont présentement TWRP ?",
    o1: "4",
    o2: "2",
    o3: "5",
    o4: "3",
    r: 1
  },
  {
    q: "À quelle émission populaire le band a-t-il déjà passé ?",
    o1: "Canada's got talent",
    o2: "America's got talent",
    o3: "American Idol",
    o4: "The Voice",
    r: 1
  },
  {
    q: "Qui est le bassiste du groupe ?",
    o1: "Doctor Sung",
    o2: "Havve Hogan",
    o3: "Lord Phobos",
    o4: "Commander Meouch",
    r: 4
  },
  {
    q: "Stone Lachismo fait toujours parti du groupe.",
    o1: "Vrai",
    o2: "Faux",
    r: 2
  },
  {
    q: "Le groupe fut fondé en 2006.",
    o1: "Vrai",
    o2: "Faux",
    r: 1
  }
];

class Quiz {
  constructor(tableau) {
    this.index = 0;
    this.score = 0;
    this.questions = tableau;
    this.questions.forEach((question, value) => {
      this.creerHtml(question, value + 1);
    });
    this.setVisible(this.index);
    this.answers();
  }
  creerHtml(Q, value) {
    //div
    this.div = document.createElement("div");
    this.div.classList.add("question");
    modal.appendChild(this.div);

    //strong
    this.strong = document.createElement("strong");
    this.strong.innerText = Q.q;
    this.div.appendChild(this.strong);

    //br
    this.br = document.createElement("br");
    this.div.appendChild(this.br);

    //options
    if ("o1" in Q) {
      let radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "question" + value);
      radio.setAttribute("value", "1");
      this.div.appendChild(radio);

      let label = document.createElement("label");
      label.innerText = Q.o1;
      this.div.appendChild(label);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }

    if ("o2" in Q) {
      let radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "question" + value);
      radio.setAttribute("value", "2");
      this.div.appendChild(radio);

      let label = document.createElement("label");
      label.innerText = Q.o2;
      this.div.appendChild(label);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }

    if ("o3" in Q) {
      let radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "question" + value);
      radio.setAttribute("value", "3");
      this.div.appendChild(radio);

      let label = document.createElement("label");
      label.innerText = Q.o3;
      this.div.appendChild(label);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }

    if ("o4" in Q) {
      let radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "question" + value);
      radio.setAttribute("value", "4");
      this.div.appendChild(radio);

      let label = document.createElement("label");
      label.innerText = Q.o4;
      this.div.appendChild(label);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }
  }
  setVisible(number) {
    let divQ = document.querySelectorAll(".question");
    divQ.forEach((q) => {
      q.classList.remove("is-visible");
      divQ[number].classList.add("is-visible");
    });
  }
  answers() {
    let R = document.querySelectorAll("input[type = 'radio']");
    R.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.checked) {
          if (radio.value == this.questions[this.index].r) {
            this.goodAnswer();
          } else {
            this.wrongAnswer();
          }
          if (this.index <= this.questions.length - 1) {
              if(this.index == this.questions.length - 1) {
                  this.div.classList.add('last');
                  this.div.innerText = 'Pointage:';
                  this.strong.innerText = this.score + '/' + this.questions.length;
                  this.div.appendChild(this.br);
                  this.div.appendChild(this.strong);
                  return false;
              }
            this.index++;
            this.setVisible(this.index);
          }
        }
      });
    });
  }
  goodAnswer() {
    this.score++;
    gsap.timeline().fromTo('.stamp',
                        {x: '0', y: '0', scale: '4', opacity: '0', zIndex: 5},
                        {scale: '1', x: '-50%', y: '-45%', opacity: '1', duration: 0.4, ease: 'power4.out'})
                 .fromTo('.stamp',
                        {x: '-50%', y: '-45%', scale: '1', opacity: '1'}, 
                         //utilisation d'un délai entre animation
                        {x: '50%', y: '45%', scale: '4', opacity: '0', duration: 0.5, ease: 'power3.in', zIndex: -1}, '+=0.15');

  gsap.timeline().fromTo('.success',
                        {opacity: '0'},
                        {opacity: '1', duration: 0.25}, '+=0.65')
                 .fromTo('.success',
                        {rotate: '25', ease: 'power3.out'},
                        {rotate: '-25', duration: 0.5, ease: 'power2.in', repeat: 3, yoyo: true}, '+=0.05')
                 .fromTo('.success',
                        {rotate: '25'},
                        {rotate: '-45', ease: 'power4.in', duration: 0.3})
                 .fromTo('.success',
                        {x: '0'},
                        {x: '100vw', duration: 0.5});

  gsap.timeline().fromTo('.text-success',
                        {opacity: '0', rotate: '0'},
                        {opacity: '1', rotate: '360', ease: 'back.out', duration: 1.5}, '+=0.90')
                 .fromTo('.text-success',
                        {scale: '1'},
                        {scale: '1.2', duration: 0.3, repeat: 3, yoyo: true})
                 .fromTo('.text-success', 
                        {y: '0'},
                        {y: '20', opacity: '0', duration: 0.3});
  }
  wrongAnswer() {
    gsap.timeline().fromTo('.fail', 
                        {opacity: '0'},
                        {opacity:'1', duration: 0.25}, '+=0.2')
                 .fromTo('.fail',
                         {rotate: '25', ease: 'power3.out'},
                         {rotate: '-25', duration: 0.5, ease:'power2.in', repeat: 3, yoyo:true}, '+=0.05')
                  .fromTo('.fail', 
                          {rotate:'25'},
                          {rotate:'45', ease: 'power4.in', duration: 0.5})
                  .fromTo('.fail',
                          {x:'0'},
                          {x: '-100vw', duration: 0.5})

  gsap.timeline().fromTo('.text-fail',
                        {opacity: '0', rotate: '0'},
                        {opacity:'1', rotate: '360', duration:'1.5'}, '+=0.65')
                  .fromTo('.text-fail',
                         {scaleY: '1'},
                         {scaleY:'0', duration: 0.5, delay: 0.5, onComplete() { console.log('FINI')}})
 
  }
}

new Quiz(questions);


