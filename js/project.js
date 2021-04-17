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

console.log("Hi! :3 Thanks for checking out my code! As a side note, please don't copy! I spent a lot of time building this myself. Feel free to reach out to me if you have any questions. :)")