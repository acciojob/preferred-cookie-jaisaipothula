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
