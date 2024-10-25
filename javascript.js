document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.getElementById("typed-text");
    const text = "Hi! I'm Leticia, a UX/UI Designer.\nWelcome to my Portfolio\nThis site was made by me! </>";
    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            const currentChar = text.charAt(charIndex);
            typedText.textContent += currentChar;

            const tempSpan = document.createElement("span");
            tempSpan.style.fontFamily = "Poppins";
            tempSpan.style.fontSize = "2rem";
            tempSpan.textContent = currentChar;

            document.body.appendChild(tempSpan);
            
            const cursor = document.createElement("div");
            cursor.className = "cursor";
            cursor.style.width = `${tempSpan.offsetWidth}px`;
            cursor.style.left = `${typedText.scrollWidth - tempSpan.offsetWidth}px`;

            typedText.appendChild(cursor);

            document.body.removeChild(tempSpan);

            charIndex++;

            setTimeout(() => {
                typedText.removeChild(cursor);
            }, 100);

            setTimeout(type, 100);
        }
    }

    type();
});

