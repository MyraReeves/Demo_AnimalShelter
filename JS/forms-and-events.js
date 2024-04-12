


// Handle form submissions:

// Access the cat form:
const catForm = document.getElementById('addCatForm');

// Create a function to handle "submit" events
function handleSubmit(event) {
    // Prevent default behavior of loading a new URL
    event.preventDefault();

    // Temporary confirmation that submission is working:
    console.log('Handling submission of:');
    console.log(event.target);
    
    const nameOfCat = event.target.catName.value;
    // Temporary confirmation that the name field submitted successfully:
    console.log(nameOfCat);
    console.log(event.target.catInterests.value);
    console.log(event.target.catName.value);

    // Clear the form after the submit button is pressed:
    event.target.reset();
};

// Listen for event submission:
catForm.addEventListener('submit', handleSubmit);



// Access the dog form:
const dogForm = document.getElementById('addDogForm');

// Listen for event submission:
dogForm.addEventListener('submit', handleSubmit);