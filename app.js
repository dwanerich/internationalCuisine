// Variables
let submitButton = document.getElementById('submit')
let foodInput = document.getElementById('cuisineInput')
let cuisineList = document.getElementById('cuisineContainer')

// Event Listeners
submitButton.addEventListener('click', function() {
    let cuisineDiv = document.createElement('div')
    cuisineDiv.classList.add('divStyle')
    cuisineDiv.innerText = foodInput.value;
    cuisineList.appendChild(cuisineDiv);
    foodInput.value = '';
    cuisineDiv.addEventListener('click', function() {
        cuisineDiv.style.textDecoration = 'line-through'
    })
    
    cuisineDiv.addEventListener('dblclick', function(){
        cuisineList.removeChild(cuisineDiv);
    })
})