// let parallax5 = document.getElementById("parallax5");
let parallax4 = document.getElementById("parallax4");
let parallax3 = document.getElementById("parallax3");
let parallax2 = document.getElementById("parallax2");
let parallax1 = document.getElementById("parallax1");
let heading = document.getElementById("gg");





const big_title = document.querySelector('.heading');
const header = document.querySelector('.parallax-container');

// let head_height = header.offsetHeight;
console.log("headerheihftdth" , head_height);

window.addEventListener("scroll", function(){
    var value = window.scrollY;
    // console.log( "offset:" + value)
    // console.log( "offset *0.7:" + offset * 0.1)

    // parallax5.style.top = value * 0.9 + "px";
    parallax4.style.top = value * 0.7 + "px";
    parallax3.style.top = value * 0.6 + "px";
    parallax2.style.top = value * 0.5 + "px";
    parallax1.style.top = value * 0 + "px";
    heading.style.top = value * 2 + "px";

    big_title.style.transform = `translateY(${value * 0.9}px)`;
    // heading.style.transform = `translateY(${value * 0.9}px)`;


    big_title.style.opacity = - value / (head_height / 2) + 1;


})




// const updateParallax = () => {
//     const scrollValue = window.scrollY;
    

//     const opacityValue = -scrollValue / (head_height / 2) + 1;
//     big_title.style.opacity = opacityValue;
// };

// window.addEventListener("scroll", updateParallax);


const video = document.querySelector('.zoomed-video');
video.style.transform = 'scale(1.5)';


