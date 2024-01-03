 // Get a reference to each range input element
 const budgetSlider = document.getElementById("budget_slider");
 const ratingSlider = document.getElementById("rating_slider");
 const rangeInput = document.getElementById("customRange2");
 const starInput = document.getElementById(" star");


 // Get a reference to each output element
 const budgetOutput = document.getElementById("budget_output");
 const ratingOutput = document.getElementById("rating_output");
 const outputElement = document.getElementById("range_output");

 // Function to update the output text for each slider
 function updateOutput() {
     const selectedValue = rangeInput.value;
     outputElement.textContent = `Members : ${selectedValue}`;
        
     const budgetValue = budgetSlider.value;
     budgetOutput.textContent = `Selected Budget: ${budgetValue}`;

     const ratingValue = ratingSlider.value;
     ratingOutput.textContent = `${ratingValue} : Stars` ;
 }

 // Add event listeners to the sliders to detect changes

rangeInput.addEventListener("input", updateOutput);
budgetSlider.addEventListener("input", updateOutput);
ratingSlider.addEventListener("input", updateOutput);

 // Call the updateOutput function initially to set the initial values
 updateOutput();




// // Attach a click event listener to the document
// document.addEventListener("click", function (event) {
// // Check if the click target is not inside the collapse element
// const collapse = document.getElementById("searchCollapse");
// if (!collapse.contains(event.target)) {
//     // If the click is outside, close the collapse
//     const myCollapse = new bootstrap.Collapse(collapse, { toggle: false });
//     myCollapse.hide();
// }
// });


// // Get a reference to the tools icon
// const toolsIcon = document.getElementById('tools-icon');

// // Add a click event listener to the icon
// toolsIcon.addEventListener('click', () => {
//     // Add the animation class
//     toolsIcon.classList.add('expand-animation');

//     // Remove the animation class after the animation completes
//     setTimeout(() => {
//         toolsIcon.classList.remove('expand-animation');
//     }, 1000); // Adjust the duration in milliseconds to match your animation duration
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Get a reference to each package column
//     const packageColumns = document.querySelectorAll('.package_colm');

//     // Add an event listener to the modal that triggers when it is hidden
//     const modal = document.getElementById('staticBackdrop');
//     modal.addEventListener('hidden.bs.modal', function () {
//         // Loop through each package column and reset the image's transform
//         packageColumns.forEach(function (column) {
//             const img = column.querySelector('.package_content span button');
//             img.style.transform = 'none';

//         });
//     });
// });
