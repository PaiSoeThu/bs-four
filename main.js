(function () {

    // Setting up the options
    var options = {
        startLength: 0, // start positioning the slider items at the beginning of the SVG path
        duration: 3000, // animation duration (used by anime.js)
        stagger: 15, // incrementally delays among items, producing an staggering effect
        easing: 'easeOutElastic', // easing function (used by anime.js)
        elasticity: 600, // elasticity factor (used by anime.js)
        rotate: true // This indicates that items should be rotated properly to match the SVG path curve
    };

    // Initialize the slider using our SVG path, items, and options
    new PathSlider('.path-slider__path', '.path-slider__item', options);

})();


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



