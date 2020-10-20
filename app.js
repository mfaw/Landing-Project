

  
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//Nav bar changes on scrolling
const header = document.querySelector("header");
const sectionOne = document.querySelector(".main__hero");
const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};
// observer used to search for intersection and add nav bar or remove it
const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav_scrolled");
    } else {
      header.classList.remove("nav_scrolled");
      
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//Section highlighted when it reaches the section

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
// creating function to scroll to anchor

function smoothScroll(target,duration){
  //function needs target to scroll to
  var target = document.querySelector(target); // we will leave it general to make it specific when calling
  var targetPosition = target.getBoundingClientRect().top; 
  // will get position relative to window
  var startPosition = window.pageYOffset;
  var startTime = null; 
 
  //animation function used to make smooth animation 
  function animation(currentTime){
    if(startTime == null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    // we need to use the ease function 
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  // any animation function used for easing
  function ease(t, b, c, d){
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * ( t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);

}

// Scroll to section on link click
// calling smooth scroll function by using event listener

var section1 = document.querySelector('.nav__link1');
var section2 = document.querySelector('.nav__link2');
var section3 = document.querySelector('.nav__link3');
var section4 = document.querySelector('.nav__link4');

section1.addEventListener('click', function(){
  smoothScroll('#section1',1000);
});
section2.addEventListener('click', function(){
  smoothScroll('#section2',1000);
});
section3.addEventListener('click', function(){
  smoothScroll('#section3',1000);
});
section4.addEventListener('click', function(){
  smoothScroll('#section4',1000);
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Set sections as active