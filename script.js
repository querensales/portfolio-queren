document.addEventListener("DOMContentLoaded", function () {
    const text = "Hello World! Eu sou a Queren Sales.";
    const typingText = document.getElementById("typing-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150);
        } else {
            // Quando terminar o efeito de digitação, mostrar os <p>
            setTimeout(() => {
                document.getElementById("line1").style.opacity = "1";
                document.getElementById("line1").style.transform = "translateY(0)";
            }, 500);

            setTimeout(() => {
                document.getElementById("line2").style.opacity = "1";
                document.getElementById("line2").style.transform = "translateY(0)";
            }, 1000);
        }
    }

    type();
});
