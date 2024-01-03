const parallaxLayers = [
   
    { element: document.getElementById("parallax5"), speed: -0.5 },
    { element: document.getElementById("parallax4"), speed: -0.4},
    { element: document.getElementById("parallax3"), speed: -0.2},
    { element: document.getElementById("parallax2"), speed: -0.1 },
    { element: document.getElementById("parallax1"), speed: -0.5 },
    // { element: document.getElementById("parallax"), speed: 1 },
    // { element: document.getElementById("parallax-main"), speed: 1 }

];

const updateParallax = () => {
    const scrollValue = window.scrollY;
    parallaxLayers.forEach(layer => {
        const translateY = -scrollValue * layer.speed;
        layer.element.style.transform = `translateY(${translateY}px)`;
    });
};

window.addEventListener("scroll", updateParallax);
let parallaxImages = document.querySelectorAll(".parallax-image");

// window.addEventListener("scroll", function() {
//     var value = window.scrollY;

//     parallaxImages.forEach(function(image, index) {
//         const speed = 0.5 * (index + 1); // Adjust the speed as needed
//         const translateY = value * speed * -1; // Invert the direction to move elements up
//         image.style.transform = `translateY(${translateY}px)`;
//     });
// });

