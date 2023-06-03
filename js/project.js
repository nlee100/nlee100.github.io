// ------------------------- navigation bar ------------------------- //

// enable smooth scrolling between nav-link anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// change nav bar on scroll
var header = document.getElementsByTagName('header')[0];
var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // header.style.visibility = "hidden";
      header.classList.remove("show");
      header.classList.add("hidden");
   } else {
      // header.style.visibility = "visible";
      header.classList.add("show");
      header.classList.remove("hidden");
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

// ------------------------- footer ------------------------- //
var dt = new Date();
document.getElementById("year_to_date").innerHTML = dt.getFullYear();

// ------------------------- loader ------------------------- //

window.addEventListener("load", function(){
    var loader = document.getElementsByClassName("loader")[0];
    loader.classList.add("fadedOut");
  });

// hello message
console.log("Hi! :3 Thanks for checking out my code! Feel free to reach out to me if you have any questions. :)")