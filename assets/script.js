let headerMenu = document.getElementsByClassName("header-menu");
let headerRespBtn = document.getElementsByClassName("header__resp-btn");
let body = document.getElementsByTagName("body");

headerRespBtn[0].addEventListener('click', () => {
        body[0].classList.toggle('body-fixed');
        headerMenu[0].classList.toggle('header-menu_active');
    }
);

let cardItem = document.querySelector(".hr-card.card-item");
if(cardItem){
    cardItem.addEventListener('click', () => {
        cardItem.classList.toggle('open');
    });
    window.addEventListener('scroll', () => {
        cardItem.classList.remove('open');
    });
}

let tabBtn = document.querySelectorAll('.tab-btn');
let tabContent = document.querySelectorAll('.tab__content');

tabBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        tabBtn.forEach(el => {
            el.classList.remove('tab-btn_cheked');
        });
        tabContent.forEach(el => {
            el.classList.remove('tab__content_cheked');
        });
        tabContent[index].classList.add('tab__content_cheked');
        item.classList.add('tab-btn_cheked');
    });
});

let goTopBtn = document.querySelector('.arrow-up');
let footer = document.querySelector('.footer');

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}
if (goTopBtn) {
  window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
          goTopBtn.classList.add('arrow-up_show');
      } else {
          goTopBtn.classList.remove('arrow-up_show');
      }
      if (window.innerWidth < 767) {
          if (window.pageYOffset > footer.offsetTop - footer.clientHeight*2) {
              goTopBtn.style.bottom =  document.body.clientHeight - (footer.offsetTop - window.pageYOffset) +25 + 'px'
              goTopBtn.classList.add('arrow-up_mobile');
          } else {
              goTopBtn.style.bottom = 20 + 'px'
              goTopBtn.classList.remove('arrow-up_mobile');
          }
      }
  });
  goTopBtn.addEventListener('click', backToTop);
}

let closeBtn = document.querySelectorAll('.close-btn');
if(closeBtn) {
    closeBtn.forEach(elem => {
        elem.addEventListener('click', function(el){
            document.querySelector('body').classList.remove('body-fixed');
            document.querySelector('.bg-pop-up').classList.remove('bg-pop-up_active');
            el.target.parentNode.parentNode.classList.remove('pop-up_open');
        })
    });
}

let openPopup = document.querySelectorAll('.open-popup');
if(closeBtn) {
    openPopup.forEach(elem => {
        elem.addEventListener('click', function(el){
            document.querySelector('body').classList.add('body-fixed');
            document.querySelector('.bg-pop-up').classList.add('bg-pop-up_active');
            document.querySelector(elem.dataset.popup).classList.add('pop-up_open');
        })
    });
}

let headerMenuSub = document.querySelectorAll('.header-menu__sublist-wrap');

if (headerMenuSub) {
    headerMenuSub.forEach(elem => {
        elem.addEventListener('click', el => {
            elem.classList.toggle('header-menu__list_active');
        })
    });
}