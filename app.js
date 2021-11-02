// Variables
let submitButton = document.getElementById('submit')
let foodInput = document.getElementById('cuisineInput')
let cuisineInput = document.getElementById('cuisineContainer')

// Event Listeners
submitButton.addEventListener('click', function() {
    let cuisineDiv= document.createElement('div')
    cuisineDiv.innerText = foodInput.value;
    cuisineContainer.appendChild(cuisineDiv);
    foodInput.value = '';
})