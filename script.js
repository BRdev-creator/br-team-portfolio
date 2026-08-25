// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


// Contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  const subject = encodeURIComponent(
    `Freelance Project Inquiry from ${name}`
  );

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`
  );

  window.location.href =
    `mailto:rahulayyapparaja@gmail.com?subject=${subject}&body=${body}`;

  formMessage.textContent = "Opening your email app...";
});
