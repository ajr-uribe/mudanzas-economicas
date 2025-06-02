// Menú móvil
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});

// Smooth scrolling para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Cerrar menú móvil si está abierto
            if (window.innerWidth <= 768) {
                document.querySelector('nav ul').style.display = 'none';
            }
        }
    });
});

// Cambiar el header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.9)';
        header.style.padding = '15px 0';
    } else {
        header.style.background = '#2c3e50';
        header.style.padding = '20px 0';
    }
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        const name = this.querySelector('#name').value;
        const email = this.querySelector('#email').value;
        
        if (!name || !email) {
            alert('Por favor complete los campos obligatorios');
            return;
        }
        
        // Aquí iría la lógica para enviar el formulario
        alert('Gracias por tu mensaje, ' + name + '. Nos pondremos en contacto contigo pronto.');
        this.reset();
    });
}

// Ajustar el margen superior del contenido para el header fijo
document.addEventListener('DOMContentLoaded', function() {
    const headerHeight = document.querySelector('header').offsetHeight;
    const pageBanner = document.querySelector('.page-banner');
    const hero = document.querySelector('.hero');
    
    if (pageBanner) {
        pageBanner.style.marginTop = headerHeight + 'px';
    }
    
    if (hero) {
        hero.style.marginTop = headerHeight + 'px';
    }
    
    // Cerrar menú al hacer clic en un enlace (para móviles)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                document.querySelector('nav ul').style.display = 'none';
            }
        });
    });
});