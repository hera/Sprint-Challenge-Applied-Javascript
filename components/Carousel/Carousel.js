
class Carousel {
    constructor (carouselId) {
        this.container = document.getElementById(carouselId);
        this.inner = this.container.querySelector('.carousel-inner');

        this.currentIndex = 0;
        this.lastIndex = this.inner.childElementCount - 1;

        this.timer = null;
        this.interval = 4; // in seconds
    }

    slideLeft() {
        let translateValue;
        
        if (this.currentIndex) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.lastIndex;
        }

        translateValue = `-${this.currentIndex * 100}%`;

        this.inner.style.transform = `translateX(${translateValue})`;
    }

    slideRight() {
        let translateValue;

        if (this.currentIndex === this.lastIndex) {
            this.currentIndex = 0;
            translateValue = 0;
        } else {
            this.currentIndex++;
            translateValue = `-${this.currentIndex * 100}%`;
        }

        this.inner.style.transform = `translateX(${translateValue})`;
    }

    slideAuto() {
        this.timer = setInterval(() => {
            this.slideRight();
        }, this.interval * 1000);
    }

    stop () {
        clearInterval(this.timer);
    }

}

let myCarousel = new Carousel('myCarousel');


// Controls

let carouselLeft = document.getElementById('carouselLeft');
carouselLeft.addEventListener('click', () => myCarousel.slideLeft());

let carouselRight = document.getElementById('carouselRight');
carouselRight.addEventListener('click', () => myCarousel.slideRight());

let autoPlay = document.getElementById('autoPlay');
autoPlay.addEventListener('click', (event) => {
    if (autoPlay.checked) {
        myCarousel.slideAuto();
    } else {
        myCarousel.stop();
    }
});
