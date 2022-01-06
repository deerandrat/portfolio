

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed:1000,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
  });