// Particle configuration and initialization
const particlesConfig = {
    particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: "#646cff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
        },
        opacity: {
            value: 0.4,
            random: true,
            animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
        },
        links: {
            enable: false  // Disabled the connecting lines
        },
        move: {
            enable: true,
            speed: 0.5,  // Reduced speed for subtler movement
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" }
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: false  // Disabled hover interaction
            },
            onClick: {
                enable: false  // Disabled click interaction
            }
        }
    }
};

// Initialize tsParticles
tsParticles.load("tsparticles", particlesConfig);

// Navigation functionality
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

function setActiveSection(sectionId) {
    // Update navigation items
    navItems.forEach(item => {
        if (item.dataset.section === sectionId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Update sections
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Add animation classes to elements in the active section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        const cards = activeSection.querySelectorAll('.skill-card, .education-card, .contact-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }
}

// Add click event listeners to navigation items
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.dataset.section;
        setActiveSection(sectionId);
    });
});

// Cursor glow effect
const cursorGlow = document.querySelector('.cursor-glow');
let isMouseMoving = false;
let mouseTimeout;

function updateCursorGlow(e) {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    
    // Show cursor glow when mouse is moving
    if (!isMouseMoving) {
        isMouseMoving = true;
        cursorGlow.style.opacity = '0.7';
    }
    
    // Hide cursor glow after mouse stops moving
    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
        cursorGlow.style.opacity = '0';
    }, 1000);
}

document.addEventListener('mousemove', updateCursorGlow);

// Initialize with home section
setActiveSection('home');