var navbar = document.getElementById("navbar"); 
var menu = document.getElementById("menu"); 

window.onscroll = function() { 
    stickyNavbar(); 
    scrollFunction();
 }; 
function stickyNavbar() { 
    if (window.pageYOffset >= menu.offsetTop) { 
    navbar.classList.add("sticky"); 
    } else { 
    navbar.classList.remove("sticky"); 
    } 
 } 
let mybutton = document.getElementById("myBtn"); 

function scrollFunction() { 

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { 
        mybutton.style.display = "block"; 
    } else { 
    mybutton.style.display = "none"; 
    } 
} 
function scrollToTop() { 

    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0
}
