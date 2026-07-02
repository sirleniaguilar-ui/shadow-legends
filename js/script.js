console.log("Shadow Legends iniciado");

const swiper = new Swiper(".mySwiper", {

    loop: true,

    slidesPerView: 3,

    spaceBetween: 30,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {

        320: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 3,
        }
    }
});