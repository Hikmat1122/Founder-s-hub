

// Navbar background toggle on scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const navLinks = document.getElementById("navLinks");
    const brand = document.getElementById("brand");
    if (window.scrollY > 50) {
      navbar.classList.add("bg-white", "shadow-md");
      navLinks.classList.remove("text-white");
      navLinks.classList.add("text-gray-800");
      brand.classList.remove("text-white");
      brand.classList.add("text-gray-900");
    } else {
      navbar.classList.remove("bg-white", "shadow-md");
      navLinks.classList.remove("text-gray-800");
      navLinks.classList.add("text-white");
      brand.classList.remove("text-gray-900");
      brand.classList.add("text-white");
    }
});
  