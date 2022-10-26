const mains = ["chicken", "beef stew", "beef and broc",];
const sides = ["salad", "fries", "sweet potatoes"];
const desserts = ["ice cream", "chips"];


const dishForm = document.getElementById("getDish"); 

dishForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const dish = document.getElementById('getDish').elements["meal"].value;
    if (!dish) {
        alert("Please select a value.");
        return false;
    }
    document.querySelector('.return-area').innerHTML = "";
    let display = "";

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
    
    const mealTitle = document.createElement("p");
    mealTitle.innerText = "You should make:";
    document.querySelector('.return-area').appendChild(mealTitle);

    const meal = document.createElement("p");
    meal.innerText = display;
    document.querySelector('.return-area').appendChild(meal);
});
