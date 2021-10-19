let query = new URLSearchParams(location.search);
let currentID = query.get(`rId`);

let recipeDetails;
async function getRecipeDetails() {
    let apiRespone = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${currentID}`);
    apiRespone = await apiRespone.json();
    recipeDetails = apiRespone.recipe;
    displayRecipeDetails(recipeDetails);
}
getRecipeDetails();
let recipeDetailsDiv = document.getElementById("recipeDetailsDiv");

function displayRecipeDetails(recipeDetails) {

    let recipeDetailsContainer = `
    
    <div class="col-md-12 text-left ">
        <div class="recipeDetails-item">
            <h4 class="color-mine py-3">${recipeDetails.title}</h4>
            <img class="img-fluid rounded-lg" src="${recipeDetails.image_url}" alt="">
            <p class="lead py-2 font-weight-bold color-mine">by ${recipeDetails.publisher}</p>
            <ul class="list-unstyled  py-2">`
    for (let i = 0; i < recipeDetails.ingredients.length; i++) {


        recipeDetailsContainer += ` <li class="detailList  py-2">${recipeDetails.ingredients[i]}.</li>`

    }
  
    recipeDetailsContainer += `</ul>
        </div>
    </div>`
    recipeDetailsDiv.innerHTML = recipeDetailsContainer;
}
