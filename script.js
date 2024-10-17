document.addEventListener("DOMContentLoaded", function() {
    // Apply saved preferences from cookies on page load
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const savedFontSize = getCookie("fontsize");
    const savedFontColor = getCookie("fontcolor");

    if (savedFontSize) {
        document.body.style.fontSize = `${savedFontSize}px`;
        document.getElementById("fontsize").value = savedFontSize; // Update input value
    }
    if (savedFontColor) {
        document.body.style.color = savedFontColor;
        document.getElementById("fontcolor").value = savedFontColor; // Update input value
    }

    // Handle form submission
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        const fontSize = document.getElementById("fontsize").value;
        const fontColor = document.getElementById("fontcolor").value;

        // Set cookies
        document.cookie = `fontsize=${fontSize}; path=/;`;
        document.cookie = `fontcolor=${fontColor}; path=/;`;

        // Apply the styles immediately
        document.body.style.fontSize = `${fontSize}px`;
        document.body.style.color = fontColor;
    });
});
