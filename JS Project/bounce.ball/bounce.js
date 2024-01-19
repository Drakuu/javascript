function animateBall() {
    const ball = document.querySelector('.ball');
    ball.classList.add('animate');

    // After the animation duration, remove the 'animate' class to reset the animation for future clicks
    setTimeout(() => {
        ball.classList.remove('animate');
    }, 7000);
}