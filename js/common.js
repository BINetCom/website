
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
        
        // Cookie banner
        const cookieBanner = document.getElementById('cookieBanner');
        const acceptCookies = document.getElementById('acceptCookies');
        const rejectCookies = document.getElementById('rejectCookies');
        
        if (!localStorage.getItem('cookiesAccepted')) {
            setTimeout(() => {
                cookieBanner.classList.remove('hidden');
            }, 1000);
        }
        
        acceptCookies.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.add('hidden');
        });
        
        rejectCookies.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'false');
            cookieBanner.classList.add('hidden');
        });
    