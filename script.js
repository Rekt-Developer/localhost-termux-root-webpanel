document.addEventListener('DOMContentLoaded', () => {
    // Navigation Handlers
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = ['home', 'guide', 'tools', 'support'];

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = e.target.getAttribute('href').substring(1);
            switchSection(targetSection);
        });
    });

    // Start Guide Button
    const startGuideBtn = document.getElementById('start-guide');
    startGuideBtn.addEventListener('click', () => switchSection('guide'));

    // Guide Navigation
    const guideSection = document.getElementById('guide');
    const steps = guideSection.querySelectorAll('.step');
    let currentStep = 0;

    function updateStepVisibility() {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep);
        });
    }

    document.getElementById('next-step').addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStepVisibility();
        }
    });

    document.getElementById('prev-step').addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateStepVisibility();
        }
    });

    // Clipboard Copy
    document.querySelectorAll('pre code').forEach(codeBlock => {
        codeBlock.addEventListener('click', () => {
            navigator.clipboard.writeText(codeBlock.textContent)
                .then(() => {
                    alert('Copied to clipboard!');
                });
        });
    });

    // Section Switching
    function switchSection(sectionName) {
        sections.forEach(section => {
            const elem = document.getElementById(section);
            elem.classList.toggle('hidden', section !== sectionName);
        });

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${sectionName}`);
        });
    }

    // Initial setup
    updateStepVisibility();
});
