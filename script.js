// Near Me
document.getElementById('nearMeBtn').addEventListener('click', () => {
    const loc = document.getElementById('locationInfo');
    loc.innerHTML = `<div class="alert alert-info">Finding your location...</div>`;
    
    navigator.geolocation.getCurrentPosition(() => {
        loc.innerHTML = `<div class="alert alert-success">✅ Properties near you in Nagpur are shown above.</div>`;
    });
});

// Form Submit
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("✅ Thank you! We'll contact you soon.");
    e.target.reset();
});