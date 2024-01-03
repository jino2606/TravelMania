let parallaxImages = document.querySelectorAll(".parallax-image");
let ticking = false;
let parallaxContainer = document.querySelector(".parallax-container");

function updateParallax() {
    var value = window.scrollY;

    parallaxImages.forEach(function(image, index) {
        const speed = 0.5 * (index + 1); // Adjust the speed as needed
        const translateY = value * speed * -1; // Invert the direction to move elements up
        image.style.transform = `translateY(${translateY}px)`;
    });

    // Adjust the container's height dynamically
    parallaxContainer.style.height = parallaxImages[0].clientHeight + "px";

    ticking = false;
}

function debounceScroll() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener("scroll", debounceScroll);
