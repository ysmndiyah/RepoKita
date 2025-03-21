const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_p8is3he", "template_5yw2so8", this)
        .then(function(response) {
            alert("Pesan berhasil dikirim! ✅");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Pesan gagal dikirim. ❌ Cek konfigurasi EmailJS.");
            console.error("FAILED...", error);
        });
});
        const formData = {
            from_name: document.getElementById("name").value,
            email_id: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        
