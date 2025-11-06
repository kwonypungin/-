/**
 * Dongguk Cultural Heritage Research Institute
 * Modern Interactive JavaScript (2025)
 * Features: Intersection Observer, Theme Toggle, Smooth Animations
 */

// ==========================================
// Utility Functions
// ==========================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// ==========================================
// Theme Toggle (Dark/Light Mode)
// ==========================================

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.themeToggle = $('#themeToggle');
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.themeToggle?.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);

        // Add animation effect
        this.themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            this.themeToggle.style.transform = '';
        }, 300);
    }
}

// ==========================================
// Navigation
// ==========================================

class Navigation {
    constructor() {
        this.navbar = $('#navbar');
        this.mobileToggle = $('#mobileToggle');
        this.navMenu = $('#navMenu');
        this.navLinks = $$('.nav-link');
        this.init();
    }

    init() {
        this.handleScroll();
        this.setupMobileMenu();
        this.setupActiveLinks();

        window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    setupMobileMenu() {
        this.mobileToggle?.addEventListener('click', () => {
            this.mobileToggle.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container') && this.navMenu.classList.contains('active')) {
                this.mobileToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.mobileToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });
    }

    setupActiveLinks() {
        // Update active link based on scroll position
        const sections = $$('section[id]');

        window.addEventListener('scroll', debounce(() => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            this.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current) && current !== '') {
                    link.classList.add('active');
                }
            });
        }, 100));
    }
}

// ==========================================
// Scroll Animations (Intersection Observer)
// ==========================================

class ScrollAnimations {
    constructor() {
        this.elements = $$('[data-scroll]');
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // Optionally unobserve after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.elements.forEach(element => observer.observe(element));
    }
}

// ==========================================
// Counter Animation
// ==========================================

class CounterAnimation {
    constructor() {
        this.counters = $$('[data-count]');
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString() + '+';
            }
        };

        updateCounter();
    }
}

// ==========================================
// Back to Top Button
// ==========================================

class BackToTop {
    constructor() {
        this.button = $('#backToTop');
        this.init();
    }

    init() {
        if (!this.button) return;

        window.addEventListener('scroll', debounce(() => this.handleScroll(), 100));
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    handleScroll() {
        if (window.scrollY > 500) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================

class SmoothScroll {
    constructor() {
        this.links = $$('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // Skip if it's just "#"
                if (href === '#') return;

                const target = $(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ==========================================
// Parallax Effect
// ==========================================

class ParallaxEffect {
    constructor() {
        this.elements = $$('.gradient-orb');
        this.init();
    }

    init() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));
    }

    handleScroll() {
        const scrolled = window.scrollY;

        this.elements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// ==========================================
// Cursor Effect (Optional - for desktop)
// ==========================================

class CursorEffect {
    constructor() {
        this.cursor = this.createCursor();
        this.cursorFollower = this.createCursorFollower();
        this.init();
    }

    createCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--celadon-primary);
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.15s ease-out;
            display: none;
        `;
        document.body.appendChild(cursor);
        return cursor;
    }

    createCursorFollower() {
        const follower = document.createElement('div');
        follower.className = 'cursor-follower';
        follower.style.cssText = `
            position: fixed;
            width: 40px;
            height: 40px;
            border: 2px solid var(--celadon-primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            mix-blend-mode: difference;
            transition: transform 0.2s ease-out;
            display: none;
        `;
        document.body.appendChild(follower);
        return follower;
    }

    init() {
        // Only enable on desktop
        if (window.innerWidth < 1024 || 'ontouchstart' in window) {
            return;
        }

        this.cursor.style.display = 'block';
        this.cursorFollower.style.display = 'block';

        document.addEventListener('mousemove', (e) => {
            this.cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
            this.cursorFollower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
        });

        // Expand cursor on clickable elements
        const clickables = $$('a, button, input, textarea, select');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform += ' scale(1.5)';
                this.cursorFollower.style.transform += ' scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = this.cursor.style.transform.replace(' scale(1.5)', '');
                this.cursorFollower.style.transform = this.cursorFollower.style.transform.replace(' scale(1.5)', '');
            });
        });
    }
}

// ==========================================
// Mouse Move 3D Effect on Cards
// ==========================================

class Card3DEffect {
    constructor() {
        this.cards = $$('.glass-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
        });
    }

    handleMouseMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    }

    handleMouseLeave(card) {
        card.style.transform = '';
    }
}

// ==========================================
// Lazy Loading Images
// ==========================================

class LazyLoader {
    constructor() {
        this.images = $$('img[data-src]');
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0,
            rootMargin: '50px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.images.forEach(img => observer.observe(img));
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) return;

        img.src = src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
    }
}

// ==========================================
// Preloader
// ==========================================

class Preloader {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');

            // Optional: Create and remove a preloader element
            const preloader = $('.preloader');
            if (preloader) {
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.remove();
                    }, 300);
                }, 500);
            }
        });
    }
}

// ==========================================
// Form Validation (for contact page)
// ==========================================

class FormValidator {
    constructor(formSelector) {
        this.form = $(formSelector);
        if (this.form) this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const inputs = this.form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            this.submitForm();
        }
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = '이 필드는 필수입니다.';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = '올바른 이메일 주소를 입력해주세요.';
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[0-9-+().\s]+$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = '올바른 전화번호를 입력해주세요.';
            }
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        } else {
            this.clearError(field);
        }

        return isValid;
    }

    showError(field, message) {
        this.clearError(field);

        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #E53E3E;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;
        field.parentNode.appendChild(errorDiv);
    }

    clearError(field) {
        field.classList.remove('error');
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    submitForm() {
        // Add your form submission logic here
        console.log('Form submitted successfully!');

        // Show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = '문의가 성공적으로 전송되었습니다!';
        successDiv.style.cssText = `
            background: var(--celadon-light);
            color: var(--celadon-dark);
            padding: 1rem;
            border-radius: var(--radius-md);
            margin-top: 1rem;
            animation: fadeInUp 0.5s ease-out;
        `;

        this.form.appendChild(successDiv);
        this.form.reset();

        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
}

// ==========================================
// Performance Monitor
// ==========================================

class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        if ('PerformanceObserver' in window) {
            this.observeLargestContentfulPaint();
            this.observeLayoutShifts();
        }
    }

    observeLargestContentfulPaint() {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    observeLayoutShifts() {
        let cumulativeScore = 0;
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (!entry.hadRecentInput) {
                    cumulativeScore += entry.value;
                }
            }
            console.log('CLS:', cumulativeScore);
        });
        observer.observe({ entryTypes: ['layout-shift'] });
    }
}

// ==========================================
// Initialize All Components
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    new ThemeManager();
    new Navigation();
    new ScrollAnimations();
    new CounterAnimation();
    new BackToTop();
    new SmoothScroll();
    new Preloader();

    // Enhanced effects (optional)
    if (window.innerWidth >= 1024) {
        new ParallaxEffect();
        new Card3DEffect();
        // Uncomment if you want custom cursor
        // new CursorEffect();
    }

    // Lazy loading
    new LazyLoader();

    // Form validation (if contact form exists)
    if ($('#contactForm')) {
        new FormValidator('#contactForm');
    }

    // Performance monitoring (development only)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        new PerformanceMonitor();
    }

    console.log('🏛️ Dongguk Cultural Heritage Research Institute - Website Loaded');
});

// ==========================================
// Service Worker Registration (PWA)
// ==========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}

// ==========================================
// Export for module usage
// ==========================================

export {
    ThemeManager,
    Navigation,
    ScrollAnimations,
    CounterAnimation,
    BackToTop,
    SmoothScroll,
    ParallaxEffect,
    Card3DEffect,
    LazyLoader,
    FormValidator
};
