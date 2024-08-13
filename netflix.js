// Select all FAQ boxes
const faqBoxes = document.querySelectorAll('.faqbox');

// Add click event listener to each FAQ box
faqBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Toggle the active class to show/hide the answer
        box.classList.toggle('active');
        
        // Toggle the plus/minus icon
        const icon = box.querySelector('svg path');
        if (box.classList.contains('active')) {
            icon.setAttribute('d', 'M4 12H20'); // Change to minus
        } else {
            icon.setAttribute('d', 'M12 4V20 M4 12H20'); // Change to plus
        }
    });
});

// Handling the "Get Started" button click
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
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle the "+" button click inside each faqbox
    const faqBoxes = document.querySelectorAll('.faqbox');
    faqBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Toggle the expanded class for the faqbox
            this.classList.toggle('expanded');

            // Check if the text has already been added
            if (!this.querySelector('.extra-text')) {
                // Create a new span element for the extra text
                const extraText = document.createElement('span');
                extraText.className = 'extra-text';
                extraText.textContent = 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.';

                // Append the new span element to the faqbox
                this.appendChild(extraText);
            } else {
                // If the text is already there, remove it on second click
                const existingText = this.querySelector('.extra-text');
                if (existingText) {
                    existingText.remove();
                }
            }
        });
    });
});
