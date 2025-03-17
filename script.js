document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const text = typewriterElement.textContent;
    typewriterElement.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
});