let currentIndex = 0;

function updateTestimonialPosition() {
    const testimonialCards = document.querySelector('.testimonial-cards');
    const cardWidth = testimonialCards.querySelector('.testimonial-card').offsetWidth;
    testimonialCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function prevTestimonial() {
    if (currentIndex > 0) {
        currentIndex--;
        updateTestimonialPosition();
    }
}

function nextTestimonial() {
    const totalCards = document.querySelectorAll('.testimonial-card').length;
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateTestimonialPosition();
    }
}

document.querySelector('.left-arrow').addEventListener('click', prevTestimonial);
document.querySelector('.right-arrow').addEventListener('click', nextTestimonial);

window.addEventListener('resize', updateTestimonialPosition);
