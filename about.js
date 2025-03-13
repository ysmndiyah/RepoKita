document.addEventListener("DOMContentLoaded", function () {
    const text = "Perkenalkan, nama saya 'Al Yasmin Assa'diyah' biasa dipanggil mimin.";
    const typingElement = document.querySelector(".typing-effect");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();
});

