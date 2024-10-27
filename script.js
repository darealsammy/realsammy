const text = document.getElementById('text');

function handleScroll() {
    const rect = text.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the text is in view
    if (rect.top < windowHeight && rect.bottom > 0) {
        text.classList.add('visible');
        window.removeEventListener('scroll', handleScroll); // Remove event listener after fade-in
    }
}

window.addEventListener('scroll', handleScroll);

