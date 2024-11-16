const wrapper = document.querySelector('.testimonials-wrapper');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

leftArrow.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0); // Giới hạn không quay về âm
    wrapper.scrollTo({
        left: currentIndex * 320, // 300px + 20px (khoảng cách)
        behavior: 'smooth',
    });
});

rightArrow.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, wrapper.children.length - 1); // Giới hạn không vượt quá số phần tử
    wrapper.scrollTo({
        left: currentIndex * 320,
        behavior: 'smooth',
    });
});
