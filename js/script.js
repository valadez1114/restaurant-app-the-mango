/**
 * Tiny vanilla-JS fading carousel.
 * Re-use for every block by changing the data attribute.
 */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel").forEach(setupCarousel);
});

function setupCarousel(carousel) {
    const slides = Array.from(carousel.querySelectorAll(".slide"));
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    let index = 0, timer;

    const show = i => {
        slides.forEach((s, n) => s.classList.toggle("active", n === i));
        index = i;
    };

    const next = () => show((index + 1) % slides.length);
    const prev = () => show((index - 1 + slides.length) % slides.length);

    nextBtn.addEventListener("click", () => { next(); reset(); });
    prevBtn.addEventListener("click", () => { prev(); reset(); });

    const reset = () => {
        clearInterval(timer);
        timer = setInterval(next, 5000);         // 5-second autoplay
    };

    show(0);
    reset();
}