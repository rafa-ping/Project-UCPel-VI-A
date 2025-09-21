document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth; 


    function goToSlide(index) {
        carouselContainer.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    }
    
    let autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }, 5000); // Muda a cada 5 segundos

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            goToSlide(currentIndex);
        }, 5000);
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
        resetAutoPlay();
    });


    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(currentIndex);
        resetAutoPlay();
    });

    window.addEventListener('resize', () => {
        const newSlideWidth = slides[0].clientWidth;
        carouselContainer.style.transition = 'none'; 
        carouselContainer.style.transform = 'translateX(' + (-newSlideWidth * currentIndex) + 'px)';
        setTimeout(() => {
            carouselContainer.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    });
});