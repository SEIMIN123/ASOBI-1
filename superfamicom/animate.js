    const next = document.querySelector('.next');
    const move = next.children;
    let move1 = [{
        transform: 'translateY(-40px)'
      },
      {
        transform: 'translateY(10px)'
      },
      {
        transform: 'translateY(-40px)'
      }
    ];

    let move2 = {
      duration: 1500,
      interations: Infinity
    };

    setInterval(() => {

      next.animate(move1, move2);
    }, 1500);

    const next1 = document.querySelector('.next1');
    const moving = next1.children;
    let move3 = [{
        transform: 'translateY(-40px)'
      },
      {
        transform: 'translateY(10px)'
      },
      {
        transform: 'translateY(-40px)'
      }
    ];

    let move4 = {
      duration: 1500,
      interations: Infinity
    };

    setInterval(() => {

      next1.animate(move3, move4);
    }, 1500);

    const next2 = document.querySelector('.next2');
    const moving1 = next2.children;
    let move5 = [{
        transform: 'translateX(-13px)'
      },
      {
        transform: 'translateX(10px)'
      },
      {
        transform: 'translateX(-13px)'
      }
    ];

    let move6 = {
      duration: 1500,
      interations: Infinity
    };

    setInterval(() => {

      next2.animate(move5, move6);
    }, 1500);


    //-----------------------------------------------------------
    const root = document.getElementById('root');
    const power = document.querySelector('.power1');
    const light = document.querySelector('.light');
    const famicom = document.querySelector('.famicom');

    let data = true;
    power.addEventListener('click', () => {

      if (data === true) {
        data = false;
        power.style.transform = "translateY(-25px)";
        power.style.transition = "0.3s";
        light.style.backgroundColor = "#D25050";
        famicom.style.transition = "1s";
        famicom.style.opacity = "1";

        console.log(power);

      } else {
        data = true;
        power.style.transform = "translateY(0px)";
        power.style.transition = "0.3s";
        light.style.backgroundColor = "#585858";
        famicom.style.transition = "1s";
        famicom.style.opacity = "0";

        console.log(light);

      }
    });

    const abtn = document.querySelector('.cir-8');
    const swi = document.querySelector('.swi');

    let data1 = true;
    abtn.addEventListener('click', () => {

      if (data1 === true) {
        data1 = false;
        swi.style.opacity = "0";
        swi.style.transition = "1s";

        console.log(power);

      } else {
        data1 = true;
        swi.style.opacity = "1";
        swi.style.transition = "1s";

        console.log(light);

      }
    });

    const up = document.querySelector('.fa-solid');

up.addEventListener('click', (event) => {

  window.scrollTo({

    top: 0,
    behavior: "smooth",
  });

});


const fort = document.querySelector('.body4-1');
fort.addEventListener('click', function(){
let page = 'https://seimin123.github.io/VER-1/';
location.href = page;
});


