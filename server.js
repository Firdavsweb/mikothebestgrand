// Функция для показа секций при прокрутке
const sections = document.querySelectorAll('.section');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Анимация кнопки
document.getElementById('animateBtn').addEventListener('click', () => {
    const box = document.getElementById('animatedBox');
    box.style.transform = 'scale(1.5)';
    setTimeout(() => {
        box.style.transform = 'scale(1)';
    }, 500);
});
