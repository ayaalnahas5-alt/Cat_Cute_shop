// ==========================================================
// Enhanced Extra Features File for Mobile & Small Screens
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject custom responsive CSS styles for Mobile and Dark Mode
    const styles = `
        /* Dark Mode Styles */
        body.dark-theme {
            background-color: #121212;
            color: #f1f1f1;
        }
        body.dark-theme .navbar { background: rgba(18, 18, 18, 0.95); }
        body.dark-theme .nav-links a { color: #f1f1f1; }
        body.dark-theme .about-section, 
        body.dark-theme .contact-section { background: #1a1a1a; }
        body.dark-theme .events-section { background: linear-gradient(180deg, #2a1a20 0%, #1a1a1a 100%); }
        body.dark-theme .product-card { background: #2d2d2d; color: #fff; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); }
        body.dark-theme .product-info h3, 
        body.dark-theme .section-title,
        body.dark-theme .about-text h3 { color: #fff; }
        body.dark-theme .info-item { background: #2d2d2d; }
        body.dark-theme .info-text h4 { color: #fff; }
        body.dark-theme .hero { background: linear-gradient(135deg, #2a1a20 0%, #1a1a1a 50%, #2a1a20 100%); }
        body.dark-theme .hero-content h1, body.dark-theme .hero-content p { color: #fff; }
        
        /* Fast Touch Response Solutions for Mobile (Crucial for Xiaomi & Android) */
        #theme-toggle, #scrollTopBtn, #supportBtn, .btn-add, .slider-btn, .hamburger, .close-popup, #sendSupport {
            touch-action: manipulation; /* Eliminates 300ms tap delay */
            -webkit-tap-highlight-color: transparent; /* Prevents annoying blue highlight on tap */
            cursor: pointer;
        }

        /* Dark/Light Mode Toggle Button */
        #theme-toggle {
            background: none; border: none; font-size: 1.5rem; transition: 0.3s;
            display: flex; align-items: center; justify-content: center;
        }
        #theme-toggle:hover { transform: scale(1.1); }
        
        /* Scroll to Top Button */
        #scrollTopBtn {
            position: fixed; bottom: 30px; right: 20px; background: linear-gradient(90deg, #ff6b9d, #c44dff);
            color: white; border: none; border-radius: 50%; width: 50px; height: 50px; font-size: 1.5rem;
            opacity: 0; visibility: hidden; z-index: 99999; box-shadow: 0 4px 15px rgba(255, 107, 157, 0.4);
            transition: all 0.3s ease; display: flex; align-items: center; justify-content: center;
        }
        #scrollTopBtn.show { opacity: 1; visibility: visible; }
        
        /* Floating Support Icon */
        #supportBtn {
            position: fixed; bottom: 30px; left: 20px; background: linear-gradient(90deg, #c44dff, #ff6b9d);
            color: white; border: none; border-radius: 50%; width: 55px; height: 55px; font-size: 1.8rem;
            z-index: 99999; box-shadow: 0 4px 15px rgba(196, 77, 255, 0.4);
            display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;
        }
        
        /* Responsive Support Pop-up for Mobile */
        #supportPopup {
            position: fixed; bottom: 95px; left: 20px; width: 300px; background: white;
            border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); z-index: 99999;
            display: none; flex-direction: column; overflow: hidden; transform-origin: bottom left;
            animation: popupAnim 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes popupAnim { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        body.dark-theme #supportPopup { background: #2d2d2d; color: #fff; }
        
        .popup-header {
            background: linear-gradient(90deg, #ff6b9d, #c44dff); color: white; padding: 15px;
            display: flex; justify-content: space-between; align-items: center; font-weight: bold;
        }
        .popup-header span { font-size: 1.1rem; }
        .close-popup { font-size: 1.2rem; transition: 0.3s; padding: 5px; }
        
        .popup-body { padding: 15px; display: flex; flex-direction: column; gap: 15px; }
        .popup-body p { font-size: 0.95rem; margin: 0; line-height: 1.4; }
        .popup-body textarea {
            width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 8px; resize: none;
            font-family: 'Poppins', sans-serif; outline: none; transition: 0.3s; font-size: 0.95rem;
        }
        .popup-body textarea:focus { border-color: #ff6b9d; }
        body.dark-theme .popup-body textarea { background: #1a1a1a; color: white; border: 1px solid #555; }
        
        .popup-body button {
            background: linear-gradient(90deg, #ff6b9d, #c44dff); color: white; border: none;
            padding: 12px; border-radius: 8px; font-weight: bold; transition: 0.3s; font-size: 1rem;
        }
        
        /* Additional Styles for Responsive Hamburger Menu on Mobile */
        @media (max-width: 768px) {
            .nav-links.active {
                display: flex !important;
                flex-direction: column;
                position: absolute;
                top: 70px; left: 0; width: 100%;
                background: rgba(255, 255, 255, 0.98);
                padding: 30px 20px;
                box-shadow: 0 15px 25px rgba(0,0,0,0.15);
                gap: 25px; text-align: center; z-index: 9999;
            }
            body.dark-theme .nav-links.active { background: rgba(18, 18, 18, 0.98); }
            
            /* Smooth transitions to transform Hamburger ☰ to ✖ when active */
            .hamburger.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
            .hamburger.active span:nth-child(2) { opacity: 0; }
            .hamburger.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
            
            /* Adjust pop-up position on very small screens to fit perfectly */
            #supportPopup {
                width: calc(100% - 40px);
                left: 20px;
                right: 20px;
            }
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // 2. Activate Mobile Menu (Hamburger Menu Toggle)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside for a better user experience
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // 3. Add Dark/Light Theme Toggle Button next to Hamburger
    const navContainer = document.querySelector('.nav-container');
    const themeBtn = document.createElement('button');
    themeBtn.id = 'theme-toggle';
    themeBtn.innerHTML = '🌙';

    if (hamburger) {
        // Position it right before the hamburger button for perfect alignment on both desktop & mobile
        hamburger.parentNode.insertBefore(themeBtn, hamburger);
    } else if (navContainer) {
        navContainer.appendChild(themeBtn);
    }

    // Enable Dark Theme toggle action
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeBtn.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });

    // 4. Add Scroll to Top Button
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollTopBtn';
    scrollBtn.innerHTML = '↑';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 5. Add Floating Support Button and Custom Pop-up
    const supportBtn = document.createElement('button');
    supportBtn.id = 'supportBtn';
    supportBtn.innerHTML = '💬';
    document.body.appendChild(supportBtn);

    const supportPopup = document.createElement('div');
    supportPopup.id = 'supportPopup';
    supportPopup.innerHTML = `
        <div class="popup-header">
            <span>Customer Support</span>
            <span class="close-popup" id="closePopup">✖</span>
        </div>
        <div class="popup-body">
            <p>Hello! How can we help you today?</p>
            <textarea rows="4" placeholder="Type your message here..."></textarea>
            <button id="sendSupport">Send Message</button>
        </div>
    `;
    document.body.appendChild(supportPopup);

    // Toggle Support Pop-up visibility
    supportBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        supportPopup.style.display = (supportPopup.style.display === 'flex') ? 'none' : 'flex';
    });

    document.getElementById('closePopup').addEventListener('click', () => {
        supportPopup.style.display = 'none';
    });

    // Handle Support Message Submission
    document.getElementById('sendSupport').addEventListener('click', () => {
        const textarea = supportPopup.querySelector('textarea');
        if (textarea.value.trim() !== '') {
            alert('Your message has been sent successfully! We will get back to you shortly.');
            textarea.value = '';
            supportPopup.style.display = 'none';
        } else {
            alert('Please write a message before sending.');
        }
    });

    // 6. Swipe Support for Mobile Slider
    const sliderContainer = document.querySelector('.slider-container');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (sliderContainer) {
        let touchStartX = 0;
        let touchEndX = 0;

        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeDistance = touchStartX - touchEndX;
            // Swipe Left (distance > 50px) -> Next slide
            if (swipeDistance > 50 && nextBtn) {
                nextBtn.click();
            }
            // Swipe Right (distance < -50px) -> Previous slide
            if (swipeDistance < -50 && prevBtn) {
                prevBtn.click();
            }
        }
    }
});