// Each animal's profile should have:
// 
//  name
//  age (random number between 1 and 10 years for cats, and between 3 to 12 months for kittens)
//  breed
//  a personality description
//  an image of the animal
//  type of home (kids, dogs, cats, etc) they would be okay living in

'use strict';

function getRandomAgeInRange(min, max) {
    let ageSpan = max - min;
    let randomFloatingPointNumber = Math.random() * ageSpan;
    let randomSpanInteger = Math.round(randomFloatingPointNumber);
    let age = randomSpanInteger + min;
    return age;
  }



///////////////////////////////////////////////////
//  Kittens and Cats -- Using Object Literals   //
/////////////////////////////////////////////////

//  Frank object:
const frank = {
    catName: 'Frank',

    age: 0,  // Starting point
    generateAge: function() {
        this.age = getRandomAgeInRange(1, 10);
    },

    breed: 'tabby',
    description: 'adorable',
    interests: ['catnip', 'chasing yarn', 'napping'],
    // imageUrl: '/Images/cat1.jpg'
};
frank.generateAge();


//  Luna object:
const luna = {
    catName: 'Luna',

    age: 0,
    generateAge: function() {
        this.age = getRandomAgeInRange(1, 10);
    },

    breed: '-----',
    description: '[Luna personality description]',
    interests: ['interest #1', 'interest #2', 'interest #3'],
};
luna.generateAge();

const gemini = {

};


//  Belle object:
const belle = {
    catName: 'Belle',
    age: 0,  // Starting point

    generateAge: function() {
        this.age = getRandomAgeInRange(1, 10);
    },

    breed: '---breed--',
    description: 'a top notch predator',
    interests: ['zoomies', 'laser pointer'],
};
belle.generateAge();



//  -------------------------------------------------------------------

// Create element to insert cat article into
let catContainerElement = document.getElementById('catProfiles');


function renderCat(cat) {

    // Create article
    let newArticleElement = document.createElement('article');
    // Append article to its parent to attach it to the DOM
    catContainerElement.appendChild(newArticleElement);


    // Create h2
    let nameHeaderElement = document.createElement('h2');
    // Attach the <h2> to DOM, inside the article
    newArticleElement.appendChild(nameHeaderElement);
    // Insert text into h2
    nameHeaderElement.textContent = cat.catName;


    // Create bio paragraph
    let bioParagraphElement = document.createElement('p');
    // Attach the <p> to DOM, inside the article
    newArticleElement.appendChild(bioParagraphElement);
    // Insert text into paragraph
    bioParagraphElement.textContent = `${cat.catName} is ${cat.description} and is ${cat.age} years old.`


    // Create unordered list of interests
    let interestsUnorderedList = document.createElement('ul');
    // Attach the <ul> to DOM, inside the <article>
    newArticleElement.appendChild(interestsUnorderedList);

    // Create a number of list items equal to the the number of a cat's interests
    for(let i=0; i<cat.interests.length; i++) {
        let interestLI = document.createElement('li');
        // Attach the <li> to the DOM, inside the <ul>
        interestsUnorderedList.appendChild(interestLI);
        // Insert text into each list item
        interestLI.textContent = cat.interests[i];
    }


    // Create image of the cat
    let catImage = document.createElement('img');
    // Attach the <img> to the DOM, inside the <article>
    newArticleElement.appendChild(catImage);
    // Set the attribute values
    catImage.setAttribute('src', 'Images/' + cat.catName + '.jpg');

}

//  ------------------------------------------------------------------------

// Call the renderCat function for each finished cat object
renderCat(frank);
renderCat(luna);
renderCat(belle);
