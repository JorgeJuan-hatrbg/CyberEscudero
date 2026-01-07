/* app.js */

// --- Configuración Inicial y Variables ---
const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const langSelector = document.getElementById('lang-selector');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const loginBtn = document.getElementById('login-btn'); // Botón en nav
const loginModal = document.getElementById('login-modal');
const closeModalBtn = document.getElementById('close-modal');

// --- 1. Lógica Dark/Light Mode ---
// Comprobar preferencia guardada o del sistema
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
});

// --- 2. Sistema de Idiomas (Simulado) ---
const translations = {
    es: {
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_services: "Servicios",
        nav_tools: "Herramientas",
        nav_resources: "Recursos",
        nav_contact: "Contacto",
        hero_title: "Seguridad Informática Integral",
        hero_subtitle: "Protegiendo tus activos digitales con estándares de ingeniería.",
        login_title: "Iniciar Sesión",
        login_google: "Continuar con Google",
        login_facebook: "Continuar con Facebook"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_tools: "Tools",
        nav_resources: "Resources",
        nav_contact: "Contact",
        hero_title: "Comprehensive Cybersecurity",
        hero_subtitle: "Protecting your digital assets with engineering standards.",
        login_title: "Login",
        login_google: "Continue with Google",
        login_facebook: "Continue with Facebook"
    }
};

langSelector.addEventListener('change', (e) => {
    const lang = e.target.value;
    updateLanguage(lang);
});

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

// --- 3. Menú Móvil ---
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
});

// --- 4. Modal de Login ---
// Funciones para abrir y cerrar
if(loginBtn && loginModal) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.remove('hidden');
        loginModal.setAttribute('aria-hidden', 'false');
    });

    closeModalBtn.addEventListener('click', () => {
        loginModal.classList.add('hidden');
        loginModal.setAttribute('aria-hidden', 'true');
    });

    // Cerrar al hacer click fuera del modal
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.add('hidden');
            loginModal.setAttribute('aria-hidden', 'true');
        }
    });
}

console.log("Sistema cargado: Ingeniería de Sistemas - CyberGuard v1.0");