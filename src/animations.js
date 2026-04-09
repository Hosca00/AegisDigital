// Fichier animations.js - À inclure dans les deux pages

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== ANIMATIONS COMMUNES ==========
    
    // Header sticky animation
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            anime({
                targets: header,
                backgroundColor: ['rgba(5,5,8,0.95)', 'rgba(5,5,8,0.98)'],
                duration: 200
            });
        }
    });
    
    // ========== PAGE AEGIS ==========
    if (document.querySelector('.hero h1')) {
        // Animation 1
        anime({
            targets: '.hero h1',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutCubic',
            delay: 200
        });
        
        // Animation 2
        anime({
            targets: '.hero-badge',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 600,
            easing: 'spring(1.2, 80, 10, 0)',
            delay: 100
        });
        
        // Animation 3
        anime({
            targets: '.hero .btn-primary, .hero .btn-outline',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            delay: anime.stagger(150, {start: 400}),
            easing: 'easeOutQuad'
        });
        
        // Animation 4 - Stats
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.stat-number').forEach(el => {
                        const target = parseInt(el.getAttribute('data-target'));
                        anime({
                            targets: { val: 0 },
                            val: target,
                            round: 1,
                            duration: 2000,
                            easing: 'easeOutExpo',
                            update: function(anim) {
                                el.innerHTML = anim.animations[0].currentValue + (el.getAttribute('data-suffix') || '');
                            }
                        });
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const statsSection = document.querySelector('.hero-stats');
        if (statsSection) statsObserver.observe(statsSection);
        
        // Animation 5
        anime({
            targets: '.hero-image',
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutBack',
            delay: 300
        });
        
        // Animation 6 - Features scroll
        const featureObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 600,
                        easing: 'easeOutCubic'
                    });
                    featureObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = '0';
            featureObserver.observe(card);
        });
        
        // Animation 7 - System cards
        const systemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.system-card',
                        translateY: [40, 0],
                        opacity: [0, 1],
                        duration: 700,
                        delay: anime.stagger(150),
                        easing: 'easeOutElastic(1, .5)'
                    });
                    systemObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        const systemGrid = document.querySelector('.system-grid');
        if (systemGrid) systemObserver.observe(systemGrid);
        
        // Animation 8 - Icon hover
        document.querySelectorAll('.feature-icon, .system-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                anime({
                    targets: icon,
                    scale: [1, 1.15],
                    duration: 300,
                    easing: 'easeOutBack'
                });
            });
            icon.addEventListener('mouseleave', () => {
                anime({
                    targets: icon,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
        });
    }
    
    // ========== PAGE BOOST ==========
    if (document.querySelector('.problems-grid')) {
        
        // Animation 4 - Problem cards
        const problemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.problem-card',
                        translateX: [-40, 0],
                        opacity: [0, 1],
                        duration: 600,
                        delay: anime.stagger(120),
                        easing: 'easeOutQuad'
                    });
                    problemObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        
        const problemsGrid = document.querySelector('.problems-grid');
        if (problemsGrid) problemObserver.observe(problemsGrid);
        
        // Animation 5 - Components
        const componentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.component-card',
                        scale: [0.8, 1],
                        opacity: [0, 1],
                        duration: 500,
                        delay: anime.stagger(80),
                        easing: 'easeOutBack'
                    });
                    componentObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        const componentsGrid = document.querySelector('.components-grid');
        if (componentsGrid) componentObserver.observe(componentsGrid);
        
        // Animation 6 - Steps
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const timeline = anime.timeline({
                        easing: 'easeOutQuad',
                        duration: 500
                    });
                    
                    timeline.add({
                        targets: '.step',
                        translateY: [30, 0],
                        opacity: [0, 1],
                        delay: anime.stagger(150)
                    }).add({
                        targets: '.step-number',
                        scale: [0.5, 1],
                        duration: 400,
                        delay: anime.stagger(150)
                    }, '-=300');
                    
                    stepObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        
        const stepsContainer = document.querySelector('.steps');
        if (stepsContainer) stepObserver.observe(stepsContainer);
        
        // Animation 7 - Pricing 3D
        const pricingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.pricing-card',
                        translateY: [50, 0],
                        opacity: [0, 1],
                        duration: 800,
                        delay: anime.stagger(200),
                        easing: 'easeOutElastic(1, .6)'
                    });
                    pricingObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        const pricingGrid = document.querySelector('.pricing-grid');
        if (pricingGrid) pricingObserver.observe(pricingGrid);
        
        // Effet 3D au hover
        document.querySelectorAll('.pricing-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                
                anime({
                    targets: card,
                    rotateY: x * 10,
                    rotateX: y * -10,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                anime({
                    targets: card,
                    rotateY: 0,
                    rotateX: 0,
                    duration: 500,
                    easing: 'easeOutElastic'
                });
            });
        });
        
        // Animation 8 - Mockups
        const mockupObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.mockup',
                        translateY: [40, 0],
                        opacity: [0, 1],
                        duration: 600,
                        delay: anime.stagger(100),
                        easing: 'easeOutQuad'
                    });
                    mockupObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        const mockupsGrid = document.querySelector('.mockups-grid');
        if (mockupsGrid) mockupObserver.observe(mockupsGrid);
        
        // Animation 9 - Benefits
        const benefitObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.benefit',
                        translateX: [-30, 0],
                        opacity: [0, 1],
                        duration: 500,
                        delay: anime.stagger(80),
                        easing: 'easeOutQuad'
                    });
                    benefitObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        
        const benefitsGrid = document.querySelector('.benefits-grid');
        if (benefitsGrid) benefitObserver.observe(benefitsGrid);
        
        // Animation 10 - CTA Pulse
        const ctaButton = document.querySelector('.final-cta .btn-primary');
        if (ctaButton) {
            anime({
                targets: ctaButton,
                scale: [1, 1.05, 1],
                duration: 1000,
                loop: 2,
                easing: 'easeInOutQuad',
                delay: 1000
            });
        }
    }
    
    // Float animation pour hero image (si présente)
    const heroImage = document.querySelector('.hero-image');
    if (heroImage && !heroImage.classList.contains('no-float')) {
        anime({
            targets: '.hero-image',
            translateY: [-8, 8],
            duration: 3000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });
    }
    
    // Floating cards pour page boost
    const card1 = document.querySelector('.card-1');
    const card2 = document.querySelector('.card-2');
    
    if (card1) {
        anime({
            targets: card1,
            translateY: [-10, 10],
            duration: 2500,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });
    }
    
    if (card2) {
        anime({
            targets: card2,
            translateY: [10, -10],
            duration: 2800,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });
    }
    
});
