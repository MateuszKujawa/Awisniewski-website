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

    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const closeMobileMenuButton = document.getElementById("closeMobileMenuButton");
    const nav = document.querySelector("nav");

    mobileMenuButton.addEventListener("click", () => {
      nav.classList.toggle("hidden");
      mobileMenuButton.classList.add("hidden");
      closeMobileMenuButton.classList.remove("hidden");
    });

    closeMobileMenuButton.addEventListener("click", () => {
      nav.classList.toggle("hidden");
      mobileMenuButton.classList.remove("hidden");
      closeMobileMenuButton.classList.add("hidden");
    });

