// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            if (entry.target.classList.contains("section")) {
                entry.target.classList.add("show");
            }

            if (entry.target.classList.contains("card")) {
                const cards = entry.target.parentElement.querySelectorAll(".card");

                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("show");
                    }, index * 200);
                });
            }

            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));


// PARTICLES
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 1.2 },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#4fc3f7",
            opacity: 0.3,
            width: 1
        }
    }
});