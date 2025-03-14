document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function () {
            navbar.classList.toggle('active');
            console.log("Menu toggle clicked, navbar active:", navbar.classList.contains('active'));
        });
    }

    const typingElement = document.querySelector(".typing-effect");
    if (typingElement) {
        const text = "Al Yasmin Assa'diyah"; 
        let index = 0;

        function typeText() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            }
        }

        typeText();
    }

    const fadeInElement = document.querySelector(".fade-in");
    if (fadeInElement) {
        fadeInElement.style.animationDelay = "2s";
    }
});

const skillIcons = document.querySelectorAll(".skills-icons i");
skillIcons.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.3)";
        icon.style.color = "#ffaa00";
    });

    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1)";
        icon.style.color = "#00aaff";
    });
});


const responseFunction = ({ status, data }) => {
    console.log("Response received. Status:", status);

    if (status === 200) {
        console.log("%cSuccess:", "color: green; font-weight: bold;", "Berhasil");
    } else if (status === 409) {
        console.error("%cConflict Error:", "color: red; font-weight: bold;", data);
    } else {
        console.error("%cGeneric Error:", "color: orange; font-weight: bold;", data);
    }
};

function sendTrackingRequest() {
    console.log("Sending tracking request...");

    const lastSent = localStorage.getItem("trackingSentAt");
    const now = Date.now();

    if (lastSent && now - lastSent < 24 * 60 * 60 * 1000) {
        console.log("%cData sudah dikirim dalam 24 jam terakhir, tidak mengirim ulang.", "color: orange;");
        return;
    }

    setTimeout(() => {
        const simulatedResponse = { status: 409, data: "Duplicate entry detected" };

        if (simulatedResponse.status === 200) {
            localStorage.setItem("trackingSentAt", now);
        }

        responseFunction(simulatedResponse);
    }, 1000);
}

sendTrackingRequest();

const apiUrl = "https://asia-southeast2-awan...omyid/api/tracker";
const trackingData = { userId: "12345", action: "page_view" };

// Fungsi untuk memeriksa respons HTTP
function checkResponse(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response; // Mengembalikan response agar bisa digunakan selanjutnya
}

// Fungsi untuk mengirim tracking data
async function sendTrackingData() {
    try {
        console.log("Mengirim data tracking...");
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(trackingData),
        });

        checkResponse(response);

        const data = await response.json();
        console.log("Tracking data sent successfully:", data);
    } catch (error) {
        console.error("Error saat mengirim tracking:", error);
    }
}

sendTrackingData();
