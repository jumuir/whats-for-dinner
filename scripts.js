// Arrays for the different parts of the meal
const mains = ["chicken", "beef stew", "beef and broc",];
const sides = ["salad", "fries", "sweet potatoes"];
const desserts = ["ice cream", "chips"];

// Get the form from the document by the id given to it
const dishForm = document.getElementById("getDish"); 

// listen for submit to happen from the button click in the form
dishForm.addEventListener('submit', e => {

    // stop the page from refreshing due to form submission
    e.preventDefault();
    
    // this is the value for whichever radio button is chosen
    const dish = document.getElementById('getDish').elements["meal"].value;
    
    // check that one of the radio buttons was checked, otherwise pop-up and exit function
    if (!dish) {
        alert("Please select a value.");
        return false;
    }

    // clear the return area of the pot image before we replace it
    document.querySelector('.return-area').innerHTML = "";

    let display = "";

    // chooses a random item from the array of whatever item was chosen, or all 3 for entire meal
    if (dish === "Main") {
        display = mains[Math.floor(Math.random() * mains.length)]
    }
    else if (dish === "Side") {
        display = sides[Math.floor(Math.random() * sides.length)]
    }
    else if (dish === "Dessert") {
        display = desserts[Math.floor(Math.random() * desserts.length)]
    }
    else if (dish === "Entire") {
        display = `${mains[Math.floor(Math.random() * mains.length)]} with ${sides[Math.floor(Math.random() * sides.length)]} and ${desserts[Math.floor(Math.random() * desserts.length)]} for dessert.`;
    }
    
    // adds the you should make line to the return area
    const mealTitle = document.createElement("p");
    mealTitle.innerText = "You should make:";
    document.querySelector('.return-area').appendChild(mealTitle);

    // adds the dish chosen above to the return area
    const meal = document.createElement("p");
    meal.innerText = display;
    document.querySelector('.return-area').appendChild(meal);
});
