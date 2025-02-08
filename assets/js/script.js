// This file contains JavaScript code for interactive features on the Genesis Labs website.

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle using the logo as a trigger (hamburger alternative)
    const navMenu = document.querySelector('.nav-menu');
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle visibility of project details
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const details = this.querySelector('.project-details');
            details.classList.toggle('hidden');
        });
    });

    // Dynamically add additional articles in the Publications section with individual article links
    const publicationsSection = document.getElementById('publications');
    const cardGrid = publicationsSection.querySelector('.card-grid');

    const additionalArticles = [
        {
            title: "Interdimensional Energy Flux",
            meta: "Published in Cosmic Studies",
            reference: "GL-2024-0453",
            link: "article1.html"
        },
        {
            title: "Quantum Void Dynamics",
            meta: "Published in Journal of Extra-Matter",
            reference: "GL-2024-0454",
            link: "article2.html"
        },
        {
            title: "Heat Reservoir Anomalies",
            meta: "Published in Advanced Theoretical Physics",
            reference: "GL-2024-0455",
            link: "article3.html"
        }
    ];

    additionalArticles.forEach(article => {
        const anchor = document.createElement('a');
        anchor.href = article.link;
        anchor.style.textDecoration = 'none';

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.meta}</p>
            <p>Reference code: ${article.reference}</p>
        `;
        anchor.appendChild(card);
        cardGrid.appendChild(anchor);
    });
});