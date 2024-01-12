import "./styles/globalStyles.css";
import "./styles/navBar.css";
import "./styles/projectsPage.css";
import "./styles/aboutPage.css";
import "./styles/contactPage.css";
import { navBar } from "./components/navbar.js";
import { projectsPage } from "./pages/projects.js";
import { aboutPage } from "./pages/about.js";
import { contactPage } from "./pages/contact.js";

navBar();
const projectButton = document.getElementById("projects");
const aboutButton = document.getElementById("about");
const contactButton = document.getElementById("contact");

projectButton.addEventListener("click", function (e) {
	e.preventDefault();
	projectsPage();
});

aboutButton.addEventListener("click", function (e) {
	e.preventDefault();
	aboutPage();
});

contactButton.addEventListener("click", function (e) {
	e.preventDefault();
	contactPage();
});
