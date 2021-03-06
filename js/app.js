

  
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
const sections = document.querySelector("ul");
const fragment = document.createDocumentFragment();
//loop to add sections wanted
for (let i = 1; i <= 4; i++) {
  //creating list and link
const list = document.createElement("li"); 
const link = document.createElement("a"); 
link.textContent = "Section" + " " +i; 
const allSection = document.querySelectorAll("section"); 
//creating event listner to scroll
link.addEventListener("click", function () {
event.preventDefault()
allSection[i].scrollIntoView({
behavior: "smooth"
});
}); 
list.appendChild(link);
fragment.appendChild(list);
};
sections.appendChild(fragment);

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
//function to get viewport size
function viewportSize(){
	var size = document.querySelectorAll( "section" );

	size.style.cssText = "position: fixed;top: 0;left: 0;bottom: 0;right: 0;";
	document.documentElement.insertBefore( size, document.documentElement.firstChild );
	
	var dims = { width: size.offsetWidth, height: size.offsetHeight };
	document.documentElement.removeChild( size );
	let coords = dims.height;
  return coords;
}
// Add class 'active' to section when near top of viewport
//Section highlighted when it reaches the section
window.addEventListener("scroll", function(scroll) {
  // scrolling happened
const mySections = document.querySelectorAll("section");
mySections.forEach(mySection => {
      const activeSec = mySection.getBoundingClientRect();
      const asectionTitle = mySection.getAttribute("data-nav");
      mySection.classList.remove("your-active-class");
      if (
          activeSec.top >= 0 &&
          activeSec.left >= 0 &&
          activeSec.right <= (window.innerWidth || document.documentElement.clientWidth) &&
          activeSec.bottom <= (window.innerHeight || document.documentElement.clientHeight)  
          
          ) {
              mySection.classList.add("your-active-class");
              const navItems = document.querySelectorAll("ul li");
              navItems.forEach(navItem => {
                  const navTitle = navItem.textContent;
                  navItem.classList.remove("activeClass")
                  if (asectionTitle == navTitle) {

                      navItem.classList.add("activeClass")
                  }
              });
              // section is in view port
          }

      else {
          // section isnt in the view port
      }
      console.log(activeSec)

  
  })
})





// Scroll to anchor ID using scrollTO event
// creating function to scroll to anchor
/* useless now that dynamic navbar has been added
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
*/
