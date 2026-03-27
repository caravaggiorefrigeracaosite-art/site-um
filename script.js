document.addEventListener('DOMContentLoaded', () => {
    // Gestão do Menu Mobile (com a mesma lógica fluída do site de referência)
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a, .btn-contact-header');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navbar.classList.toggle('active');
            
            // Impede o scroll do body quando o menu está aberto
            if (navbar.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Fechar menu ao clicar num link (essencial para navegação âncora)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Efeito de sombra no Header ao fazer scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});