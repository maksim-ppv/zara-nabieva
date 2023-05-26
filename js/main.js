const itemButton = document.querySelectorAll('.button__card'),
    cardsBlock = document.querySelector('.cards__block'),
    itemModal = document.querySelectorAll('.item__modal'),
    Body = document.querySelector('body');

const modalOpen = (event) => {
    const target = event.target;
    const modal = target.closest('.cards__item');
    const targetModal = modal.dataset.numberCard;
    itemModal.forEach((item)=>{
        if(item.id == targetModal){
            item.classList.add('modal__active');
            const shadow = item.querySelector('.item__shadow');
            shadow.classList.add('animation__modal');
            Body.classList.add('overflow-hidden');
        }
    });
};
const modalClose = (event)=>{
    const target = event.target;
    const modal = target.closest('.item__modal')
   
        itemModal.forEach((item)=>{
            const shadowButton = item.querySelector('.shadow__button');
            const shadow = item.querySelector('.item__shadow')
            if(target===modal||target===shadowButton){
            item.classList.remove('modal__active');
            shadow.classList.remove('animation__modal');
            Body.classList.remove('overflow-hidden');
        }
    })
        
};

itemButton.forEach((item)=>{
    item.addEventListener('click', modalOpen)
});
itemModal.forEach((item)=>{

    item.addEventListener('click', modalClose)
});
$(document).ready(function(){
    $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      waitForAnimate: true,
      autoplaySpeed:1500,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    })
});

const scrollTo = (element)=>{
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
};

$(()=>{
    $('.up').on('click', (e)=>{
      $('html,body').stop().animate({ scrollTop: $('#header').offset().top }, 1000);
      e.preventDefault();
    });   
});
$(document).ready(()=> {
    $("a.navbar__link").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
    });
});


AOS.init();
