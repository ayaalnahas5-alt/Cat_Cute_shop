// ==========================================
// (Extra Features)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const styles = `
        /* (Dark Mode) */
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
        
        /* From Dark Mode To Light Mode */
        #theme-toggle {
            background: none; border: none; font-size: 1.5rem; cursor: pointer; margin-left: 20px; transition: 0.3s;
        }
        #theme-toggle:hover { transform: scale(1.1); }
        
        /* (Scroll to Top) */
        #scrollTopBtn {
            position: fixed; bottom: 30px; right: 30px; background: linear-gradient(90deg, #ff6b9d, #c44dff);
            color: white; border: none; border-radius: 50%; width: 50px; height: 50px; font-size: 1.5rem;
            cursor: pointer; opacity: 0; visibility: hidden; z-index: 1000; box-shadow: 0 4px 15px rgba(255, 107, 157, 0.4);
            transition: all 0.3s ease;
        }
        #scrollTopBtn.show { opacity: 1; visibility: visible; }
        #scrollTopBtn:hover { transform: scale(1.1); }
        
        /* Support Icon */
        #supportBtn {
            position: fixed; bottom: 30px; left: 30px; background: linear-gradient(90deg, #c44dff, #ff6b9d);
            color: white; border: none; border-radius: 50%; width: 60px; height: 60px; font-size: 2rem;
            cursor: pointer; z-index: 1000; box-shadow: 0 4px 15px rgba(196, 77, 255, 0.4);
            display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;
        }
        #supportBtn:hover { transform: scale(1.1); }
        
        /* (Pop-up) */
        #supportPopup {
            position: fixed; bottom: 100px; left: 30px; width: 320px; background: white;
            border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); z-index: 1001;
            display: none; flex-direction: column; overflow: hidden; transform-origin: bottom left;
            animation: popupAnim 0.3s ease;
        }
        @keyframes popupAnim { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        body.dark-theme #supportPopup { background: #2d2d2d; color: #fff; }
        
        .popup-header {
            background: linear-gradient(90deg, #ff6b9d, #c44dff); color: white; padding: 15px;
            display: flex; justify-content: space-between; align-items: center; font-weight: bold;
        }
        .popup-header span { font-size: 1.1rem; }
        .close-popup { cursor: pointer; font-size: 1.2rem; transition: 0.3s; }
        .close-popup:hover { color: #f1f1f1; transform: scale(1.2); }
        
        .popup-body { padding: 15px; display: flex; flex-direction: column; gap: 15px; }
        .popup-body p { font-size: 0.95rem; margin: 0; }
        .popup-body textarea {
            width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 8px; resize: none;
            font-family: 'Poppins', sans-serif; outline: none; transition: 0.3s;
        }
        .popup-body textarea:focus { border-color: #ff6b9d; }
        body.dark-theme .popup-body textarea { background: #1a1a1a; color: white; border: 1px solid #555; }
        
        .popup-body button {
            background: linear-gradient(90deg, #ff6b9d, #c44dff); color: white; border: none;
            padding: 12px; border-radius: 8px; cursor: pointer; font-weight: bold; transition: 0.3s;
        }
        .popup-body button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(255, 107, 157, 0.4); }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Button Icon Navbar
    const navContainer = document.querySelector('.nav-container');
    const themeBtn = document.createElement('button');
    themeBtn.id = 'theme-toggle';
    themeBtn.innerHTML = '🌙';
    navContainer.appendChild(themeBtn);

    // Swap btween button
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeBtn.innerHTML = '☀️';
        } else {
            themeBtn.innerHTML = '🌙';
        }
    });

    // (Scroll to Top)
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollTopBtn';
    scrollBtn.innerHTML = '↑';
    document.body.appendChild(scrollBtn);

    // Show/Hide
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });


    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Pop-up
    const supportBtn = document.createElement('button');
    supportBtn.id = 'supportBtn';
    supportBtn.innerHTML = '💬';
    document.body.appendChild(supportBtn);

    const supportPopup = document.createElement('div');
    supportPopup.id = 'supportPopup';
    supportPopup.innerHTML = `
        <div class="popup-header">
            <span>Support Aya/span>
            <span class="close-popup" id="closePopup">✖</span>
        </div>
        <div class="popup-body">
            <p>مرحباً! كيف يمكننا مساعدتك اليوم؟</p>
            <textarea rows="4" placeholder="اكتب رسالتك أو استفسارك هنا..."></textarea>
            <button id="sendSupport">إرسال الرسالة</button>
        </div>
    `;
    document.body.appendChild(supportPopup);

    // Open/Close 
    supportBtn.addEventListener('click', () => {
        if (supportPopup.style.display === 'flex') {
            supportPopup.style.display = 'none';
        } else {
            supportPopup.style.display = 'flex';
        }
    });

    document.getElementById('closePopup').addEventListener('click', () => {
        supportPopup.style.display = 'none';
    });

    // محاكاة إرسال الرسالة
    document.getElementById('sendSupport').addEventListener('click', () => {
        const textarea = supportPopup.querySelector('textarea');
        if (textarea.value.trim() !== '') {
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
            textarea.value = '';
            supportPopup.style.display = 'none';
        } else {
            alert('الرجاء كتابة رسالة قبل الإرسال.');
        }
    });
});