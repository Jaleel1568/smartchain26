// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // sections
            if (entry.target.classList.contains('section')) {
                entry.target.classList.add('show');
            }

            // cards with stagger
            if (entry.target.classList.contains('card')) {
                const cards = entry.target.parentElement.querySelectorAll('.card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('show');
                    }, index * 200);
                });
            }

            // 🔥 NEW — workshop items
            if (entry.target.classList.contains('workshop-item')) {
                const items = entry.target.parentElement.querySelectorAll('.workshop-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 150);
                });
            }

            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.05 }); // 🔥 lowered so tall cards trigger earlier

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// PARTICLES
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 1.2 },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#60a5fa',
            opacity: 0.1,
            width: 1
        }
    }
});