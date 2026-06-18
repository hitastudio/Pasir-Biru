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