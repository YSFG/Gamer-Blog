
// Sticky Navigation
window.onscroll = function(){ myFunction()};

// get the current value 
var navbar = document.getElementById("header");

// get the navbar position
var sticky = navbar.offsetTop;

// sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}

// Dropdown Arrow
var arr = document.querySelectorAll('.arrow');

arr.forEach(function (el) {
    el.addEventListener('click', function(event) {
        event.target.classList.toggle('down');
      });
});

// Loader
document.querySelector("#site-main").style.display = "none";
document.getElementById("preload").classList.add("preloader");

setTimeout(() => {
    document.getElementById("preload").classList.remove("preloader")
    document.querySelector("#site-main").style.display = "block";
    
}, 1000);