function contactPage() {
	// Select entry point
	const content = document.getElementById("content");

	//page container
	const contactPage = document.createElement("div");
	contactPage.id = "contactPage";

	//projects container
	const contactContainer = document.createElement("div");
	contactContainer.classList.add("contactContainer");

	//contact form
	const contactForm = document.createElement("h1");
	contactForm.textContent = "Contact ME";

	//append to content
	contactPage.appendChild(contactForm);
	contactPage.appendChild(contactContainer);
	content.appendChild(contactPage);
}

export { contactPage };
