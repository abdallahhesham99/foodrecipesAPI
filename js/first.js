let allRecipes = [];

async function getRecipes(term) {
  let apiRespone = await fetch(
    `https://forkify-api.herokuapp.com/api/search?&q=${term}`);
  apiRespone = await apiRespone.json();
  allRecipes = apiRespone.recipes;
  displayRecipes();
}
getRecipes(`pasta`);
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
  getRecipes(searchInput.value);
});

let resultRow = document.getElementById("resultRow");

function displayRecipes() {
  let recipesContainer = ``;
  for (let i = 0; i < allRecipes.length; i++) {


    // let recipeID = "'" + allRecipes[i].recipe_id + "'"

    recipesContainer += `
    <div class="col-md-6 col-lg-4 mt-3">
        <div class="recipe bg-white">
          <img class="img-fluid py-2" src="${allRecipes[i].image_url}">
          <h5 class="modify-h5 py-2 color-mine font-weight-bolder">${allRecipes[i].title}</h5>
          <p class="lead text-black">${allRecipes[i].publisher}</p>
          <a href="${allRecipes[i].source_url}" target="_blank">
            <button class="btn btn-mine mb-2">Source</button>
          </a>
          <a href="details.html?rId=${allRecipes[i].recipe_id}" target="_blank">
          <button class="btn btn-mine mb-2">Details</button>
        </a>
        </div>
    </div>`;
  }
  resultRow.innerHTML = recipesContainer;
}






















// async function getRecipeDetails(id) {
//   let apiRespone = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
//   apiRespone = await apiRespone.json();
//   let recipeDetails = apiRespone.recipe;
//   console.log(recipeDetails);
// }

// let recipeDetailsDiv = document.getElementById("recipeDetailsDiv");


// function displayRecipeDetails(recipeDetails) {
//   let recipeDetailsContainer = `
//       <h4 class="color-mine pb-2 font-weight-bolder">${recipeDetails.title}</h4>
//       <img class="w-100" src="${recipeDetails.image_url}" alt="">
//       <p class="py-2 font-weight-bold">${recipeDetails.publisher}</p>
//       <ul class="list-unstyled">`

//   for (let i = 0; i < recipeDetails.ingredients.length; i++) {

//     recipeDetailsContainer += `<li class="py-1 font-weight-bold">${recipeDetails.ingredients[i]}</li>`
//   }

//   recipeDetailsContainer += `</ul>;`
//   recipeDetailsDiv.innerHTML = recipeDetailsContainer;
// }
