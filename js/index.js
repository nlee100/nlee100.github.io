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
// var header = document.getElementsByTagName('header')[0];
// window.onscroll = function () { 
//     // "use strict";
//     if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
//         header.classList.add("color");
//         header.classList.remove("transparent");
//     } 
//     else {
//         header.classList.add("transparent");
//         header.classList.remove("color");
//     }
// };
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

// change active state of nav-link anchors when scrolling
const navLinks = document.querySelectorAll('a');
const sections = document.querySelectorAll('section');

function changeNavLinkOnScroll() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  // console.log(sections[index].offsetTop);
  
  navLinks.forEach((navlink) => navlink.classList.remove('active'));
  navLinks[index].classList.add('active');
  // console.log(navLinks[index]);
}

changeNavLinkOnScroll();
window.addEventListener('scroll', changeNavLinkOnScroll);

// ------------------------- console typewriter ------------------------- //

// console typewriter for different noun descriptions
consoleText(['computational biologist.', 'data engineer.', 'writer.', 'golfer.'], 'text',['#d81159', '#956262','#4EC5C1','#F7882F']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 2000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;
    } else {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}

// ------------------------- loader ------------------------- //

window.addEventListener("load", function(){
  var loader = document.getElementsByClassName("loader")[0];
  loader.classList.add("fadedOut");
});

// hello message
console.log("Hi! :3 Thanks for checking out my code! As a side note, please don't copy! I spent a lot of time building this. Feel free to reach out to me if you have any questions! :)")