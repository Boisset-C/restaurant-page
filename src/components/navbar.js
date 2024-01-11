function navBar() {
	const content = document.getElementById("content");

	//navbar container
	const navContainer = document.createElement("nav");
	navContainer.id = "navBar";
	content.appendChild(navContainer);

	//Tabs
	const tabs = ["Projects", "About", "Contact"];
	//Dynamically create tabs
	tabs.forEach((tabName) => {
		const tab = document.createElement("a");
		tab.classList.add("tab");
		tab.textContent = tabName;
		tab.href = "#";
		navContainer.appendChild(tab);
	});
}

export { navBar };
