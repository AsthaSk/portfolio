// Toggle mobile navigation menu
function toggleMenu() {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.innerText = "Please fill in all fields.";
        return;
    }

    if (!validateEmail(email)) {
        formMessage.style.color = "red";
        formMessage.innerText = "Please enter a valid email address.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.innerText = "Message sent successfully!";

    // Reset form fields
    document.getElementById("contact-form").reset();
});

// Email validation function
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}