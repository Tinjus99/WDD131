let random = Math.floor(Math.random() * recipes.length)
console.log(random)


function ratingTemplate(rating){
	let ratingHTML = ``
	for (let i=1; i<=5; i++){
		if (i<= rating){
			ratingHTML += `<span aria-hidden="true" class="icon-star">⭐</span>`
		} else {
			ratingHTML += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
		}
	}
	return ratingHTML
}


function recipeTemplate(recipe){
	const tagsHTML = recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")
	const starsHTML = ratingTemplate(recipe.rating)

	return`
		<div class="recipe-card">
			<div class="recipe-content">
				<img src="${recipe.image}" alt="image of ${recipe.name}"></img>
				<button class="tags">${tagsHTML}</button>
				<h2>${recipe.name}</h2>
				<span
					class="rating"
					role="img"
					aria-label="Rating: ${recipes[random].rating} out of 5 stars">
					${starsHTML}
				</span>
				<p>${recipe.description}</p>
			</div>
		</div>
	`
}


let recipe = recipes[random]

function renderRecipes(recipesToRender) {
	const recipeContainer = document.querySelector("#recipe-container");
	recipeContainer.innerHTML = ""; // clear previous results
	recipesToRender.forEach(recipe => {
		recipeContainer.innerHTML += recipeTemplate(recipe);
	});
}


function initialize(){
	renderRecipes([recipe])
}

initialize()


document.querySelector(".search-button").addEventListener("click", function () {
	const recipeQuery = document.querySelector("#search-input-box").value.toLowerCase();

	const filteredRecipes = recipes.filter(recipe => {
		return (
			recipe.name.toLowerCase().includes(recipeQuery) ||
			recipe.description.toLowerCase().includes(recipeQuery) ||
			recipe.tags.some(tag => tag.toLowerCase().includes(recipeQuery))
		);
	});

	renderRecipes(filteredRecipes);
});