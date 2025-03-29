
        document.addEventListener("DOMContentLoaded", function () {
            const text = "Perkenalkan, nama saya 'Al Yasmin Assa'diyah', biasa dipanggil Mimin.";
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
            
            const menuToggle = document.getElementById("menu-toggle");
            const navbar = document.getElementById("navbar");
            
            menuToggle.addEventListener("click", function () {
                navbar.classList.toggle("active");
            });
        });

        function openModal(imgElement) {
            const modal = document.getElementById("imageModal");
            const modalImg = document.getElementById("modalImg");
            
            modal.style.display = "flex";
            modalImg.src = imgElement.src;
        }
        
        function closeModal() {
            document.getElementById("imageModal").style.display = "none";
        }
        
   