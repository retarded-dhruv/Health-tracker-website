// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add "visible" class to elements in the viewport
function checkFadeInAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', checkFadeInAnimation);

// Call checkFadeInAnimation on page load
window.addEventListener('load', checkFadeInAnimation);
