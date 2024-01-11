/* <h1>Restaurant Title</h1>
			<p>
				Blah blah something about Restaurants.Blah blah something about
				RestaurantsBlah blah something about RestaurantsBlah blah
				something about RestaurantsBlah blah something about
				RestaurantsBlah blah something about RestaurantsBlah blah
				something about RestaurantsBlah blah something about
				RestaurantsBlah blah something about RestaurantsBlah blah
				something about RestaurantsBlah blah something about
				RestaurantsBlah blah something about Restaurants
			</p>
			<img
				src="../assets/placeholder.jpg"
				alt=""
				width="400px"
				height="400px"
			/>
*/
function projectsPage() {
	// Select entry point
	const content = document.getElementById("content");

	// projects header
	const title = document.createElement("h1");
	title.textContent = "Restaraunt Title";
	content.appendChild(title);
}

export { projectsPage };
