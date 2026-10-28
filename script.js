// ==========================================
// PORTFOLIO SETTINGS
// Update your email here.
// Also update the email link in index.html.
// ==========================================

const PORTFOLIO_EMAIL = "YOUR_EMAIL@example.com";


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close the menu after the visitor selects a section.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}


// ==========================================
// AUTOMATIC FOOTER YEAR
// ==========================================

const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ==========================================
// CONTACT FORM
// This opens the visitor's email app.
// It does NOT send or store messages by itself.
// ==========================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const name = document.getElementById("visitor-name").value.trim();
    const email = document.getElementById("visitor-email").value.trim();
    const message = document.getElementById("visitor-message").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please complete all fields.";
      return;
    }

    if (PORTFOLIO_EMAIL === "YOUR_EMAIL@example.com") {
      formStatus.textContent =
        "Website owner: replace PORTFOLIO_EMAIL in script.js with your email first.";
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    formStatus.textContent =
      "Opening your email application. Review the email and press Send.";

    window.location.href =
      `mailto:${PORTFOLIO_EMAIL}?subject=${subject}&body=${body}`;
  });
}
