import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

new Swiper('.swiper', {
    // Optional parameters
  
    loop: true,
    grabCursor: true,
    autoplay: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.slwiper-button-prev',
    },
   
    
  });