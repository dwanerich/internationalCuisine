

// Variables
let submitButton = document.getElementById('submit')
let foodInput = document.getElementById('cuisineInput')
let ingredientInput = document.getElementById('ingredientInput')
let cuisineList = document.getElementById('cuisineContainer')

// Event Listeners
submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    let cuisineDiv = document.createElement('div')
    cuisineDiv.classList.add('divStyle')
    cuisineDiv.innerHTML = ` ${foodInput.value} ${ingredientInput.value}`
    cuisineList.appendChild(cuisineDiv);
    foodInput.value = ''; ingredientInput.value = '';
    cuisineDiv.addEventListener('click', function() {
        cuisineDiv.style.textDecoration = 'line-through'
    })
    
    cuisineDiv.addEventListener('dblclick', function(){
        cuisineList.removeChild(cuisineDiv);
    })
})

