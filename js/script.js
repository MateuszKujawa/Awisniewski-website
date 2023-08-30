// Navbar scroll change color
const navbar = document.getElementById('navbar');
    let scrolled = false;
    
    window.onscroll = function() {
      if (window.scrollY > 20) { // Określ, kiedy zmiana ma nastąpić (np. po przewinięciu 10 pikseli)
        if (!scrolled) {
          navbar.classList.add('scrolled');
          scrolled = true;
        }
      } else {
        if (scrolled) {
          navbar.classList.remove('scrolled');
          scrolled = false;
        }
      }
    };

// Mobile menu

const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenuButton = document.getElementById('closeMobileMenu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open-menu');
    document.body.classList.add('lockScroll');
});

closeMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('open-menu');
    document.body.classList.remove('lockScroll');
});


function closeMenu() {
    mobileMenu.classList.toggle('open-menu');
    document.body.classList.toggle('lockScroll');
}

