// VALIDASI FORMULIR KONTAK
const formKontak = document.querySelector('.kontak-form form');

formKontak.addEventListener('submit', function(event) {

    const nama = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const pesan = document.querySelector('textarea[name="message"]').value.trim();


    if (nama === "") {
        event.preventDefault(); 
        alert("Kolom Nama tidak boleh dibiarkan kosong.");
        return;
    }

    if (email === "") {
        event.preventDefault();
        alert("Kolom Email tidak boleh kosong.");
        return;
    } else if (!email.includes('@') || !email.includes('.')) {
        event.preventDefault();
        alert("Format email tidak valid. Pastikan mengandung karakter '@' dan titik (.).");
        return;
    }

    if (pesan === "") {
        event.preventDefault();
        alert("Kolom Pesan tidak boleh dibiarkan kosong.");
        return;
    }

});


//FITUR TOMBOL SCROLL TO TOP
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});


// FITUR HAMBURGER MENU UNTUK MOBILE
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', function() {
    // Memunculkan atau menyembunyikan menu
    navLinks.classList.toggle('active');
    
    // Mengubah ikon dari garis tiga (bars) menjadi silang (times)
    const icon = mobileMenu.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Menutup menu otomatis jika salah satu link diklik (khusus HP)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// FITUR DRAG TO SCROLL (GESER GALERI DENGAN KURSOR)
const sliders = document.querySelectorAll('.gallery-slider');

sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    // Saat kursor menekan area galeri
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'grabbing'; // Kursor jadi tangan menggenggam
        slider.style.scrollBehavior = 'auto'; // Matikan efek smooth sementara agar tarikan responsif
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    // Saat kursor keluar dari area galeri
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
        slider.style.scrollBehavior = 'smooth'; // Nyalakan efek smooth kembali
    });

    // Saat tekanan klik mouse dilepas
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
        slider.style.scrollBehavior = 'smooth';
    });

    // Saat kursor digeser
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return; // Hentikan fungsi jika mouse tidak sedang ditekan
        e.preventDefault(); // Mencegah browser menyeleksi gambar secara otomatis
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Angka 2 adalah sensitivitas kecepatan geser (bisa diubah)
        slider.scrollLeft = scrollLeft - walk;
    });
});


// ANIMASI HERO SECTION MENGGUNAKAN JAVASCRIPT (Web Animations API)
document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector('.hero-content h1');
    const p = document.querySelector('.hero-content p');
    const buttons = document.querySelector('.hero-buttons');

    // Pengaturan durasi dan pergerakan animasi
    const animationConfig = {
        duration: 1000,
        easing: 'ease',
        fill: 'forwards'
    };

    // Keyframes (Dari Bawah ke Atas)
    const fadeUpKeyframes = [
        { opacity: 0, transform: 'translateY(40px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ];

    // Eksekusi animasi dengan delay menggunakan setTimeout
    if (h1 && p && buttons) {
        setTimeout(() => h1.animate(fadeUpKeyframes, animationConfig), 300);
        setTimeout(() => p.animate(fadeUpKeyframes, animationConfig), 800);
        setTimeout(() => buttons.animate(fadeUpKeyframes, animationConfig), 1300);
    }
});

// Efek Hover untuk Tombol (Buttons)
const allButtons = document.querySelectorAll('.btn-primary, .btn-secondary, #scrollTopBtn');

allButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-3px)';
        
        if (btn.classList.contains('btn-primary') || btn.id === 'scrollTopBtn') {
            btn.style.backgroundColor = 'var(--sand-beige)';
        } else if (btn.classList.contains('btn-secondary')) {
            btn.style.backgroundColor = 'var(--ocean-cyan)';
            btn.style.color = 'var(--white)';
        }
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
        
        btn.style.backgroundColor = '';
        btn.style.color = '';
    });
});

//  Efek Hover untuk Kartu Potensi (Cards)
const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.03)';
        card.style.boxShadow = '0 18px 35px rgba(0,0,0,0.18)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = 'var(--shadow)';
    });
});