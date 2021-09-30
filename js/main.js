/****************** PROJECT MENU ******************/
const allProjects = document.getElementsByClassName("project");
mySelection('all'); // Execute the function and show all columns

// Add active class to the current button (highlight it)
const btnContainer = document.getElementById("myBtnContainer");

document.querySelector(".filter-all").addEventListener("click", () => {
    mySelection('all');
});

document.querySelector(".filter-aws").addEventListener("click", () => {
    mySelection('aws');
});

document.querySelector(".filter-web").addEventListener("click", () => {
    mySelection('web');
});

document.querySelector(".filter-csharp").addEventListener("click", () => {
  mySelection('csharp');
});
//sergio
function mySelection(c) {
    if (c === 'all') {
        for (let i = 0; i < allProjects.length; i++) {
            allProjects[i].classList.add('show');
        }
    } else {
        for (let i = 0; i < allProjects.length; i++) {
            let classList = allProjects[i].classList;
            if (classList.contains(c))
                classList.add('show');
            else
                classList.remove('show');
        }
    }
}

const btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active-project");
        current[0].classList.remove("active-project");
        this.classList.add("active-project");
    });
}

/****************** GLIDE ******************/

window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        duration: 2,
        rewind: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    })
});

/****************** INTERSECTION OBSERVER ******************/
const options = {
    threshold: 0
};

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('slide-in');
        }
    });
}, options);

let aboutText = document.querySelector(".about-text");
observer.observe(aboutText);

let aboutImage = document.querySelector(".about-img");
observer.observe(aboutImage);

let educationSection = document.querySelectorAll("#education > div");
educationSection.forEach(section => {
    observer.observe(section);
});

let workExpParagraph = document.querySelector("#work-exp p");
observer.observe(workExpParagraph);

let workExpSVG = document.querySelector("#work-exp .work-exp-img");
observer.observe(workExpSVG);

let workExpCompanies = document.querySelectorAll(".company");
workExpCompanies.forEach(section => {
    observer.observe(section);
});

let skillsSection = document.querySelector(".skills-grid");
observer.observe(skillsSection);

let projects = document.querySelectorAll(".project");
projects.forEach(section => {
    observer.observe(section);
});


// txt-rotate

AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {

   "use strict";

   $(window).stellar({
   responsive: true,
   parallaxBackgrounds: true,
   parallaxElements: true,
   horizontalScrolling: false,
   hideDistantElements: false,
   scrollProperty: 'scroll'
 });

 var TxtRotate = function(el, toRotate, period) {
 this.toRotate = toRotate;
 this.el = el;
 this.loopNum = 0;
 this.period = parseInt(period, 10) || 2000;
 this.txt = '';
 this.tick();
 this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
 var i = this.loopNum % this.toRotate.length;
 var fullTxt = this.toRotate[i];

 if (this.isDeleting) {
   this.txt = fullTxt.substring(0, this.txt.length - 1);
 } else {
   this.txt = fullTxt.substring(0, this.txt.length + 1);
 }

 this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

 var that = this;
 var delta = 100;

 if (this.isDeleting) { delta /= 2; }

 if (!this.isDeleting && this.txt === fullTxt) {
   delta = this.period;
   this.isDeleting = true;
 } else if (this.isDeleting && this.txt === '') {
   this.isDeleting = false;
   this.loopNum++;
   delta = 500;
 }

 setTimeout(function() {
   that.tick();
 }, delta);
};

window.onload = function() {
 var elements = document.getElementsByClassName('txt-rotate');
 for (var i=0; i<elements.length; i++) {
   var toRotate = elements[i].getAttribute('data-rotate');
   var period = elements[i].getAttribute('data-period');
   if (toRotate) {
     new TxtRotate(elements[i], JSON.parse(toRotate), period);
   }
 }
 // INJECT CSS
 var css = document.createElement("style");
 css.type = "text/css";
 css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
 document.body.appendChild(css);
};
})(jQuery);

// this makes the height of each page equal to the height of the window
// $('.page').css('height', $( window ).height());

// scrollspy section
(function($){
 //variable that will hold the href attr of the links in the menu
 var sections = [];
 //variable that stores the id of the section
 var id = false;
 //variable for the selection of the anchors in the navbar
 var $navbara = $('#navi a');
 
 $navbara.click(function(e){
   //prevent the page from refreshing
   e.preventDefault();
   //set the top offset animation and speed
   $('html, body').animate({
     scrollTop: $($(this).attr('href')).offset().top - 180
},500);
   hash($(this).attr('href'));
 });
 
 
 //select all the anchors in the navbar one after another
 $navbara.each(function(){
  // and adds them in the sections variable
   sections.push($($(this).attr('href')));
   
 })
 $(window).scroll(function(e){
   // scrollTop retains the value of the scroll top with the reference at the middle of the page
   var scrollTop = $(this).scrollTop() + ($(window).height()/2);
   //cycle through the values in sections array
   for (var i in sections) {
     var section = sections[i];
     //if scrollTop variable is bigger than the top offset of a section in the sections array then 
     if (scrollTop > section.offset().top){
       var scrolled_id = section.attr('id');
     }
   }
   if (scrolled_id !== id) {
     id = scrolled_id;
     $($navbara).removeClass('current');
     $('#navi a[href="#' + id + '"]').addClass('current'); 
   }
 })
})(jQuery);