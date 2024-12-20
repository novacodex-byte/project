let menuIcon = document.querySelector('#menu-icon');
let cancelIcon = document.querySelector('#cancel-icon'); // Select the cancel icon
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Show navbar and toggle icons
menuIcon.onclick = () => {
    menuIcon.style.display = 'none'; // Hide hamburger icon
    cancelIcon.style.display = 'inline-block'; // Show cancel icon
    navbar.classList.add('active'); // Show the navbar
};

// Hide navbar and toggle icons
cancelIcon.onclick = () => {
    cancelIcon.style.display = 'none'; // Hide cancel icon
    menuIcon.style.display = 'inline-block'; // Show hamburger icon
    navbar.classList.remove('active'); // Hide the navbar
};

// Highlight active navbar link on scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};



window.addEventListener('load', function() {
    // Hide the loader
    document.getElementById("loader-container").style.display = "none";
    // Show the main content
    document.getElementById("main-content").style.display = "block";
});




document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Debugging: Log collected values
        console.log({ name, email, phone, subject, message });

        // Send email using EmailJS
        emailjs.send('service_4gy8aqn', 'template_7ki6x5p', {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
        }).then((response) => {
            alert('Message sent successfully!');
            console.log('Success:', response.status, response.text);
            document.getElementById('contact-form').reset();
        }).catch((error) => {
            alert('Failed to send message. Please try again.');
            console.error('Error details:', error);
        });
    });
});



// Show link when hovering over the gallery item
function showLink(element) {
    const link = element.querySelector('.project-link');
    link.style.opacity = '1';
}

// Hide link when the hover ends
function hideLink(element) {
    const link = element.querySelector('.project-link');
    link.style.opacity = '0';
}
