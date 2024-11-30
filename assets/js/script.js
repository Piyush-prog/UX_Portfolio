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
loadHTML("skills-placeholder", "../../components/skills.html");
loadHTML("conscious_cravings", "../../components/project_cards/conscious_cravings.html");
loadHTML("home_away_from_home", "../../components/project_cards/home_away_from_home.html");
loadHTML("building_credit_confidence", "../../components/project_cards/building_credit_confidence.html");
loadHTML("explorations_graphic_design", "../../components/project_cards/explorations_graphic_design.html");