
// global variable declarations

const state = {

    cuisine: {}
}

const cuisineForm = document.getElementById("form")
const foodInput = document.getElementById('cuisine-input')
const ingredientInput = document.getElementById("ingredient-input")
const submitBtn = document.getElementById('submit')


//  event listener
cuisineForm.addEventListener("submit", handleFormSubmit)

    // form.reset();

// event handlers

function handleFormSubmit(event) {
    event.preventDefault()

    // get form data

    const newCuisine = {
        name: event.target["name"].value,
        ingredient: event.target["ingredient"].value
    }

    cuisineForm.reset()
    console.log(newCuisine)


    // save cuisine on sever w/fetch request
    // POST /cuisines
    ApiService.addCuisine(newCuisine).then(actualNewCuisine => {
        console.log("actual: ", actualNewCuisine)
        new Cuisine(actualNewCuisine)
    })
        // .catch(error => alert(error))


    ApiService.fetchCuisines()
    .then(actualCuisineData => {
        renderAllCuisines(actualCusineData)
    })

// Render Helpers
    function renderOneCuisine(cuisineObj) {
    const cuisine = new Cuisine(cuisineObj)
    }

    function renderAllCuisines(cuisines) {
    cuisines.forEach(renderOneCuisine)
    }
}