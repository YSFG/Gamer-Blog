const nav = `
<header id="header" class="fixed shadow bg-light">
<nav class="container navbar-pix">
     <a href="../../index.html" class="nav-brand-pix">
         <img src="../../assets/logo/pixelate_logo_003.png" class="nav-logo" alt="Pixelate">
     </a>

     <!-- toggle button -->
                 

     <button class="toggle-button-pix">
         <span><i class="fas fa-bars"></i></span>
     </button>

     <!-- collapse on toggle button click -->
     <div class="collapse-pix">
         <ul class="navbar-nav-pix mb-0">
             <a href="../../index.html" class="nav-link">Home</a>
             <a href="../../blog/blog.html" class="nav-link">Blog</a>
             <a href="../../archive.html" class="nav-link archive-tab">Archive</a>
             <a href="../../team.html" class="nav-link team-tab">Team</a>
             <a href="../../contact.html" class="nav-link">Contact</a>
         </ul>
     </div>

       <!-- collapse on toggle button click -->
       <div class="collapse-pix">
           <ul class="navbar-nav-pix mb-0" >
                 <!-- <div class="search-box">
                     <a href="#" class="nav-link"><i class="fas fa-search"></i></a>
                 </div> -->
                 <a href="https://www.facebook.com/pixelategamestudio" target="_blank" class="nav-link"><i class="fab fa-facebook-f"></i></a>
                 <a href="https://twitter.com/pixelate_game" target="_blank" class="nav-link"><i class="fab fa-twitter"></i></a>
                 <a href="https://www.instagram.com/Pixelate.Games/" target="_blank" class="nav-link"><i class="fab fa-instagram"></i></a>
                 <a href="https://www.reddit.com/user/Pixelate_Games/" target="_blank" class="nav-link"><i class="fab fa-brands fa-reddit"></i></a>                           
           </ul>
       </div>
</nav>
</header>
    `;

// Hamburger Menu
document.getElementById('header').innerHTML = nav;

var toggle = document.querySelector("#header .toggle-button-pix");
var collapse = document.querySelectorAll("#header .collapse-pix");
if (toggle){
    toggle.addEventListener("click" , hamburger, false);

    function hamburger() {
        collapse.forEach(col => col.classList.toggle("collapse-toggle-pix"));
    };
};

// Active Page
var activePage = window.location.pathname;
var navLinks = document.querySelectorAll('nav ul a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    };
})
