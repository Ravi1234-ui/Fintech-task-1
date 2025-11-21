document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('registerBtn');

    // 1. Button Link Logic
    registerBtn.addEventListener('click', () => {
        // IMPORTANT: Replace this with the Google Form link from Task 2 when ready
        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfCCsfhlVujvKW_YzVieKLB6m7rcrAatJ-1wOrhM42yl-eumQ/viewform?usp=sharing&ouid=100274382210250766210"; 
        
        if(formUrl.includes("your-form-id")) {
            alert("The Google Form link has not been updated in script.js yet!");
        } else {
            window.open(formUrl, '_blank');
        }
    });

    // 2. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Apply animation to list items
    const listItems = document.querySelectorAll('.hero-features li');
    listItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = `all 0.5s ease ${index * 0.1}s`; // Staggered delay
        observer.observe(item);
    });
});