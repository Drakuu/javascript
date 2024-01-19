const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.top = `${index * 100}%`;
});

const goUp = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImage();
};

const goDown = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateY(-${counter * 100}%)`;
    });
};
