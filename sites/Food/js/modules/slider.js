function slider({slidesArray, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, slidesContainer, indicators}) {
    //Слайдер
    const prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          currentSlide = document.querySelector(currentCounter),
          totalSlides = document.querySelector(totalCounter),
          slides = document.querySelectorAll(slidesArray),
          slidesWrapper = document.querySelector(wrapper),
          slidesCarousel = document.querySelector(slidesContainer), 
          carouselIndicators = document.querySelector(indicators),
          width = window.getComputedStyle(slidesWrapper).width;

    let slidersCounter = 0,
        offset = 0,
        widthFigure = toNumber(width);

    slidesCarousel.style.width = 100 * slides.length + '%'; 
    slidesCarousel.style.display = 'flex'; 
    slidesCarousel.style.transition = '0.5s all';
    
    slides.forEach(slide => {
        slide.style.width = width;
    }); 

    slidesWrapper.style.overflow = 'hidden';
    totalSlides.textContent = showNumberSlide(slides.length);

    next.addEventListener('click', () => {
        if (offset == widthFigure * (slides.length - 1)) {
            offset = 0;
            slidersCounter = 0;
        } else {
            offset += widthFigure; 
            slidersCounter += 1;
        }
        moveCarousel(slidersCounter);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = widthFigure * (slides.length - 1);
            slidersCounter = slides.length - 1;
        } else {
            offset -= widthFigure; 
            slidersCounter -= 1;
        }
        moveCarousel(slidersCounter);
    });

    slidesWrapper.style.position = 'relative';
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        
        dot.classList.add('dot');
        carouselIndicators.append(dot);
    }

    const dots = document.querySelectorAll('.dot');
    painDot();
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            painDot(i);
            moveCarousel(i);
        });
    });

    function moveCarousel(slidesNumber) {
        painDot(slidesNumber);
        slidersCounter = slidesNumber;
        offset = slidesNumber * widthFigure;
        slidesCarousel.style.transform = `translateX(${-offset}px)`;
        currentSlide.textContent = showNumberSlide(slidesNumber + 1);
    }

    function painDot(i = 0) {
        dots.forEach(dot => {
            dot.style.opacity =".5";
        });
        dots[i].style.opacity = "1";
    }
    
    function showNumberSlide(number) {
        if (number >= 10) {
            return `${number}`;
        } else {
            return `0${number}`;
        }
    }

    function toNumber(string) {
        return +string.replace(/\D/g, '');
    }
}

export default slider;