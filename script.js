// Listen for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page refresh

    // Get values (In a real app, you would send these to a backend)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple validation feedback
    if(name && email) {
        alert(`Thank you, ${name}! We have received your inquiry regarding Fast Pay investments.`);
        this.reset(); // Clear the form
    } else {
        alert('Please fill in all fields.');
    }
});

// Optional: Add smooth scroll behavior for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});