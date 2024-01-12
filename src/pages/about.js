import placeholderImage from "../assets/placeholder.jpg";

function aboutPage() {
	// Select entry point
	const content = document.getElementById("content");

	//page container
	const aboutPage = document.createElement("div");
	aboutPage.id = "aboutPage";

	//page header
	const title = document.createElement("h1");
	title.textContent = "About Me";

	// about paragraph
	const aboutParagraph = document.createElement("p");
	aboutParagraph.textContent =
		"Don’t be fooled! We’re going to cover much more than just the new module syntax in this lesson! Before we can really use these modules, we’re going to have to learn about npm and webpack, which are both topics that will be very useful to you even beyond this lesson. In the end, the modules themselves are simple to implement, so we’re going to take this chance to learn about a few other things.";

	//placeholder image
	const image = document.createElement("img");
	image.src = placeholderImage;
	image.classList.add("aboutImage");

	aboutPage.appendChild(title);
	aboutPage.appendChild(aboutParagraph);
	aboutPage.appendChild(image);
	content.appendChild(aboutPage);
}

export { aboutPage };
