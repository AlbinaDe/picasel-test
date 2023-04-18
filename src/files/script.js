import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

 const swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-btn--next',
        prevEl: '.swiper-btn--prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },
    slidesPerView: 1,
    mousewheel: false,
    keyboard: true,
});

const onModal = ({modal, btnOpen, btnClose, btnSend}) =>{
    const buttonElem = document.querySelector(btnOpen);
    const modalElem = document.querySelector(modal);
    const sendlElem = document.querySelector(btnSend);

    modalElem.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    const closeModal = event => {
        const target = event.target;
        if (target === modalElem || target.closest(btnClose)) {
            modalElem.style.opacity = 0;

            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
            }, 300)

        } else if (target === sendlElem){
            if(!$('form input: invalid').lenght){
                modalElem.style.opacity = 0;

                setTimeout(() => {
                    modalElem.style.visibility = 'hidden';
                }, 300)
            }
        }
    };

    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
    };

    buttonElem.addEventListener('click', openModal);
    modalElem.addEventListener('click', closeModal);
}

onModal({
    modal: '.modal',
    btnOpen: '.modal__open',
    btnClose: '.modal__close',
    btnSend: '.modal__send'
});

onModal({
    modal: '.modal-menu',
    btnOpen: '.navbar__menu-mobile',
    btnClose: '.modal__close-mobile',
    btnSend: '.modal__send'
});