const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
const contactButton = document.querySelector('.cta');
if (contactButton) {
    contactButton.addEventListener('click', () => {
        alert('Contact our support team at support@travelnest.com');
    });
}
const destinations = document.querySelector('.destinations-list');
if (destinations) {
    setInterval(() => {
        const firstDestination = destinations.querySelector('.destination-item');
        if (firstDestination) {
            destinations.appendChild(firstDestination);
        }
    }, 5000);
}
const footerDate = document.querySelector('footer p');
if (footerDate) {
    footerDate.innerHTML = &copy; ${new Date().getFullYear()};
}
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.display = 'none';
    scrollToTopButton.style.backgroundColor = '#007bff';
    scrollToTopButton.style.color = 'white';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.padding = '10px 15px';
    scrollToTopButton.style.cursor = 'pointer';
    scrollToTopButton.style.borderRadius = '50%';
    scrollToTopButton.style.fontSize = '18px';
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    const footerYear = document.getElementById('footer-year');
    footerYear.textContent = new Date().getFullYear();
});
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    const searchForm = document.querySelector('.search-bar');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Searching for your perfect trip!');
    });

    const ctaButton = document.querySelector('.hero .cta');
    ctaButton.addEventListener('click', () => {
        alert('Let the journey begin!');
    });

    const exploreButtons = document.querySelectorAll('.destination-item button');
    exploreButtons.forEach((button) => {
        button.addEventListener('click', () => {
            alert('Feature coming soon!');
        });
    });

    const supportButton = document.querySelector('.support .cta');
    supportButton.addEventListener('click', () => {
        alert('Contacting support...');
    });
});