
// Scroll animation handler
function handleScrollAnimations() {
    const elements = document.querySelectorAll('[class*="translate-"]');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 200) {
            element.classList.remove('translate-y-10', 'translate-x-10', '-translate-x-10', '-translate-y-10', 'opacity-0');
        }
    });
}

// Initialize on load and scroll
window.addEventListener('load', handleScrollAnimations);
window.addEventListener('scroll', handleScrollAnimations);

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});
// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileServicesToggle = document.getElementById('mobileServicesToggleMenu');
const mobileServicesDropdown = document.getElementById('mobileServicesDropdownMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
});
mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
});

mobileServicesToggle.addEventListener('click', () => {
    mobileServicesDropdown.classList.toggle('active');
    mobileServicesToggle.querySelector('i').classList.toggle('fa-chevron-down');
    mobileServicesToggle.querySelector('i').classList.toggle('fa-chevron-up');
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Check for saved theme preference or use preferred color scheme
if (localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
} else {
    document.documentElement.classList.remove('dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
    // Toggle icon
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');

    // Toggle theme
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');
    const rejectCookies = document.getElementById('rejectCookies');
    
    // Check if user has already made a choice
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.remove('hidden');
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    // Accept cookies
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
        setTimeout(() => {
            cookieBanner.classList.add('hidden');
        }, 300);
    });

    // Reject cookies
    rejectCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieBanner.classList.remove('show');
        setTimeout(() => {
            cookieBanner.classList.add('hidden');
        }, 300);
    });
});
// Floating Devis Button Animation
document.addEventListener('DOMContentLoaded', function() {
    const floatingDevisBtn = document.getElementById('floatingDevisBtn');
    const servicesLinks = document.querySelectorAll('a[href="#services"], nav a[href*="services"]');
    
    // Show/hide function
    function toggleDevisButton(show) {
        if (show) {
            floatingDevisBtn.classList.remove('hidden');
            setTimeout(() => {
                floatingDevisBtn.classList.remove('opacity-0', 'translate-y-10');
                floatingDevisBtn.classList.add('opacity-100', 'translate-y-0');
            }, 10);
        } else {
            floatingDevisBtn.classList.remove('opacity-100', 'translate-y-0');
            floatingDevisBtn.classList.add('opacity-0', 'translate-y-10');
            setTimeout(() => {
                floatingDevisBtn.classList.add('hidden');
            }, 500);
        }
    }
    
    // Add click event to all services links
    servicesLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default if it's an anchor link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
            }
            toggleDevisButton(true);
            
            // Scroll to services section if it's an anchor link
            if (this.getAttribute('href').startsWith('#')) {
                const target = document.getElementById('services');
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Desktop click handler (only hide on desktop)
    document.addEventListener('click', function(e) {
        // Only run on desktop
        if (window.innerWidth >= 768) {
            if (!floatingDevisBtn.contains(e.target)) {
                // Check if click was on any services link
                const isServicesLink = Array.from(servicesLinks).some(link => 
                    link.contains(e.target)
                );
                
                if (!isServicesLink) {
                    toggleDevisButton(false);
                }
            }
        }
    });
    
    // Mobile menu close button handler
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            // Keep button visible when closing mobile menu
            toggleDevisButton(true);
        });
    }
});