

// Variables
let submitButton = document.getElementById('submit')
let foodInput = document.getElementById('cuisineInput')
let cuisineList = document.getElementById('cuisineContainer')
let ingredientInput = document.getElementById('ingredientInput')
let inputAlert = document.getElementById('input-alert')

// Event Listeners
submitButton.addEventListener('click', function(e) {
    e.preventDefault();

if (foodInput.value === '' || cuisineInput.value === '') {
    inputAlert.innerHTML = "Please enter correct values";

    setTimeout(() => inputAlert.remove(), 3000)


} else {
    let cuisineDiv = document.createElement('div')
    cuisineDiv.classList.add('divStyle')
    cuisineDiv.innerHTML = `${foodInput.value} ${ingredientInput.value}`
    cuisineList.appendChild(cuisineDiv);
    foodInput.value = ''; ingredientInput.value = '';
    cuisineDiv.addEventListener('click', function() {
        cuisineDiv.style.textDecoration = 'line-through'
    })}
    
    cuisineDiv.addEventListener('dblclick', function(){
        cuisineList.removeChild(cuisineDiv);
    })
})

// g paw many more much smaller steps

