var swiper = new Swiper(".slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });