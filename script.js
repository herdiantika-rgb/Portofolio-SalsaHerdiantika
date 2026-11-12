
// =====================================
// 1. MENGAMBIL ELEMEN HTML
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");


// =====================================
// 2. MENU HAMBURGER
// =====================================

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// =====================================
// 3. MENUTUP MENU SETELAH DIKLIK
// =====================================

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =====================================
// 4. TAHUN OTOMATIS PADA FOOTER
// =====================================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// =====================================
// 5. MENU AKTIF BERDASARKAN BAGIAN
// =====================================

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(function(item) {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + currentSection) {
            item.classList.add("active");
        }

    });

});
