if (window.matchMedia("(max-width: 760px)").matches) {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1.16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
}
else{
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
      });
}


window.addEventListener('load', checkScreenSize);
document.addEventListener('DOMContentLoaded', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
