const faqBoxes = document.querySelectorAll('.faqbox');
faqBoxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
        
        const icon = box.querySelector('svg path');
        if (box.classList.contains('active')) {
            icon.setAttribute('d', 'M4 12H20'); // Change to minus
        } else {
            icon.setAttribute('d', 'M12 4V20 M4 12H20'); // Change to plus
        }
    });
});

const getStartedButton = document.querySelector('.btn-red');
const emailInput = document.querySelector('.hero input[type="text"]');

getStartedButton.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (email === "") {
        alert("Please enter a valid email address.");
    } else {
        alert(`Thank you! An email will be sent to ${email} with further instructions.`);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    
    const faqBoxes = document.querySelectorAll('.faqbox');
    faqBoxes.forEach(box => {
        box.addEventListener('click', function() {
            this.classList.toggle('expanded');

            if (!this.querySelector('.extra-text')) {
                const extraText = document.createElement('span');
                extraText.className = 'extra-text';
                extraText.textContent = 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.';

                this.appendChild(extraText);
            } else {
                const existingText = this.querySelector('.extra-text');
                if (existingText) {
                    existingText.remove();
                }
            }
        });
    });
});
