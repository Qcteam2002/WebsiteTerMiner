const wrapper = document.querySelector('.testimonials-wrapper');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

if (wrapper && leftArrow && rightArrow) {
    let currentIndex = 0;

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            wrapper.scrollTo({
                left: currentIndex * 320,
                behavior: 'smooth',
            });
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex < wrapper.children.length - 1) {
            currentIndex += 1;
            wrapper.scrollTo({
                left: currentIndex * 320,
                behavior: 'smooth',
            });
        }
    });
} else {
    console.error('Wrapper or Arrows not found');
}


function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

// Load Header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

// Load Footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));


    document.addEventListener('DOMContentLoaded', () => {
        const marqueeContent = document.querySelector('.marquee-content');
        const clone = marqueeContent.innerHTML; // Clone nội dung
        marqueeContent.innerHTML += clone; // Thêm nội dung clone vào cuối
    });
    
