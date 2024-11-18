// Function to load an HTML file into a specific element
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Load the header and footer
loadHTML("header-placeholder", "../../components/header.html");
loadHTML("footer-placeholder", "../../components/footer.html");
loadHTML("form-placeholder", "../../components/contact-form.html");