document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "Al Yasmin Assa'diyah"; 
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

   
    document.querySelector(".fade-in").style.animationDelay = "2s";
});
