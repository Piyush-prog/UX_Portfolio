// Function to load an HTML file into a specific element
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Load the header and footer
loadHTML("header-placeholder", "/UX_Portfolio/components/header.html");
loadHTML("footer-placeholder", "/UX_Portfolio/components/footer.html");
loadHTML("skills-placeholder", "/UX_Portfolio/components/skills.html");
loadHTML("conscious_cravings", "/UX_Portfolio/components/project_cards/conscious_cravings.html");
loadHTML("home_away_from_home", "/UX_Portfolio/components/project_cards/home_away_from_home.html");
loadHTML("building_credit_confidence", "/UX_Portfolio/components/project_cards/building_credit_confidence.html");
loadHTML("drinks_menu", "/UX_Portfolio/components/project_cards/drinks_menu.html");
loadHTML("cca", "/UX_Portfolio/components/project_cards/cca.html");
loadHTML("holiday_greeting", "/UX_Portfolio/components/project_cards/holiday_greeting.html");