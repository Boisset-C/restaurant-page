import placeholderImage from "../assets/placeholder.jpg";

function projectsPage() {
	// Select entry point
	const content = document.getElementById("content");

	//page container
	const projectsPage = document.createElement("div");
	projectsPage.id = "projectsPage";

	//projects container
	const projectsContainer = document.createElement("div");
	projectsContainer.classList.add("projectsContainer");

	//display header
	displayProjectsHeader(projectsPage);

	//displayprojects
	displayProjects(projectsContainer);

	//append to content
	projectsPage.appendChild(projectsContainer);
	content.appendChild(projectsPage);
}

//Display projects header
function displayProjectsHeader(page) {
	// projects header
	const title = document.createElement("h1");
	title.textContent = "My Projects";
	page.appendChild(title);
}

//Display Projects
function displayProjects(page) {
	//Example projects
	const projects = [
		"tictactoe",
		"rockpaperscissors",
		"battleship",
		"tictactoe",
		"rockpaperscissors",
		"battleship",
	];

	projects.forEach((project) => {
		const card = document.createElement("div");
		card.classList.add("card");

		const title = document.createElement("p");
		title.classList.add("cardTitle");
		title.textContent = project;

		const text = document.createElement("p");
		text.textContent = "This is example text card is working";

		const imageContainer = document.createElement("figure");
		imageContainer.classList.add("imgContainer");

		const image = document.createElement("img");
		image.width = "400px";
		image.height = "400px";
		image.src = placeholderImage;

		imageContainer.appendChild(image);
		card.appendChild(title);
		card.appendChild(text);
		card.appendChild(imageContainer);
		page.appendChild(card);
	});
}

export { projectsPage };
