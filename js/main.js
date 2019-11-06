/* Data Structure

    master array of all drinks (objects) and key value pairs

    array of "easy drinks"

    array of "medium" drinks

    array of "hard" drinks

Pull objects via getElementById for all ingredient buttons

1. Old Fashioned: 2oz bourbon, 2 dashes bitters, 1tsp sugar, Garnish: orange twist
2. Margarita: 2oz tequilla, 1oz Cointreau, 1oz Lime Juice, Garnish: Salt on the rim
3. Cosmopolitan: 1.5oz Citrus Vodka, 1oz Cointreau, .5oz Lime Juice, .25 oz cranberry juice
4. Negroni: 1oz Gin, 1ox Campari, 1oz Vermouth
5. Moscow Mule: 2oz Vodka, 5oz Ginger Beer, .5oz Lime Juice
6. Mojito: 2oz White Rum, .75oz Lime Juice, .5oz Simple Syrup, Mint leaves
7. Whiskey Sour: 2oz Whiskey, 1oz Lemon Juice, 1tsp sugar, 1 eggwhite
8. Manhattan: 2oz Rye Whiskey, 1oz Vermouth, 2 dashes bitters
9. Gimlet: 2oz Gin or Vodka, .75oz Simply Syrup, .75oz Lime Juice
10. Sazerac: 2oz Rye Whiskey, .5oz Simple Syrup, 2 dashes bitters, Absinthe
11. Paloma: 2oz Tequilla, .5oz Lime Juice, Grapefruit soda to top
12. Sidecar: 2oz VSOP Cognac, 1oz Cointreau, .75oz Lemon Juice
13. Mint Julep: 2oz Bourbon, Mint leaves, .25oz Simple Syrup
14. French 75: 2oz Gin, 2 dashes Simple Syrup, .5oz Lemon Juice, Champagne
15. Long Island: .5oz Vodka, .5oz Gin, .5oz Light Rum, .5oz Tequilla, .5oz Triple Sec, 2oz Sour, top with cola
16. White Russian: 1.5oz Vodka, 1oz Kahlua, top with milk
17. Sex on the Beach: .5oz Peach Schnapps, 1.5oz OJ or pineapple juice, 1.5oz Cranberry juice, 


//one issue is going to be what if theres a range of how many oz could be in that cocktail depending on who makes it

*/


//need a startgame function that takes you to level 1 page
//timer set/ initiate function
//needs to shuffle drink objects and attributes from array (if level 1, from easy array,level 2- medium etc)
//needs to display drink name
//drink cup must render number of components (if its level 1)
//event listener for all objects on page
//object chose must reflect object color in the cup

//liquors
// const bourbonEl= document.getElementById(bourbon);
// const vodkaEl= document.getElementById(vodka);
// const ginEl= document.getElementById(gin);
// const whiskeyEl= document.getElementById(whiskey);
// const tequillaEl= document.getElementById(tequilla);
// const rumEl= document.getElementById(rum);
// const lightRumEl= document.getElementById(lightRum);

// //addins
// const bittersEl= document.getElementById(bitters);
// const cointreauEl= document.getElementById(cointreau);
// const limeJuiceEl= document.getElementById(limeJuice);
// const cranberryJuiceEl= document.getElementById(cranberryJuice);

//garnish
// const sugarEl= document.getElementById(sugar);
// const orangePeelEl= document.getElementById(orangePeel);
// const saltEl= document.getElementById(salt);

//drinks with ingredients
//___________________________________________________________________
//apps state (variables)

 


//cached----------------------------

// const guessedCocktailEl = document.getElementById(cocktailName);

//constants-------------------------


//functions-------------------------*/



const cocktails = [
    {
        name: "old fashion",
        ingredients: ["Bourbon", "Bitters", "Orange Peel"],

    },
    {
        name: "margarita",
        ingredients: ["Tequila", "Cointreau","Lime Juice", "Salt"],
    },
    {
        name: "cosmopolitan",
        ingredients: ["Vodka", "Cointreau", "Lime Juice", "Cranberry Juice"],
    },
    {
        name: "negroni",
        ingredients: ["Gin", "Campari", "Vermouth"],
    },
    {
        name: "moscow mule",
        ingredients: ["Vodka","Ginger Beer","Lime"],
    },
    {
        name: "sidecar",
        ingredients: ["Cognac", "Cointreau","Lemon Juice"],
    },
    {
        name: "manhattan",
        ingredients: ["Tequila", "Cointreau","Lime Juice","Salt"],
    },
    {
        name: "paloma",
        ingredients: ["Tequila","Lime Juice","Grapefruit Juice"],
    },
    {
        name: "sazerac",
        ingredients: ["Whiskey","Simple Syrup","Bitters","Absinthe"],
    },
    {
        name: "french 75",
        ingredients: ["Gin", "Champagne","Simple Syrup","Lemon Juice"],
    }
]

// if the guess for liquor is === my object.liquor  then say yes you got it right or say no try again. 

// const guesses = []

// guesses ["bourbon", "lime juice", "sugar"]

// if the value of the things in side my array match the value of the things inside my database 
// then the guess is correct. 

// console.log(cocktails[0].name, cocktails[1].liquor[1])

// init();

// function render() {
//     guessedCocktailEl.textContent = guessedIng;
// }


const displayEl = document.querySelector('span');
const topShelf = document.getElementById("topShelf")

let rndmCocktailIdx;
// const ingredients = document.querySelectorAll('.ing')


// console.log(ingredients)

topShelf.addEventListener("click", function(e){
    console.log(e.target.alt)
    let currentDrink = cocktails[rndmCocktailIdx]

    if(e.target.alt === undefined) return

    if(currentDrink.ingredients.includes(e.target.alt) ){
        console.log("match")
    } else {
        console.log("no match")
    }
    
})

document.querySelector("button")
    .addEventListener("click", function() {
    rndmCocktailIdx = Math.floor(Math.random() * cocktails.length); //pulls a random index of cocktails
    displayEl.innerText = cocktails[rndmCocktailIdx].name; //logs the name associated with that index

});


//     guessedIng = "_".repeat(orderedCocktail.length);
//     ingredientsUsed = [];
//     wrongIng = [];
//     render();
// }
// var displayDrinkEl;

// document.querySelector('.start').addEventListener('click', function() {;
//     render();
//   });

// const oldFashioned = {
//     liquor: [2oz, bourbonEl],
//     addins: [.25, bittersEl],
//     garnish: orangePeelEl
// };

// const margarita = {
//     liquor: [2oz, tequillaEl, 1oz, cointreauEl]
//     addins: [1oz, limeJuiceEl]
//     garnish: saltEl
// };

// const cosmopolitan = {
//     liquor: [1.5oz, vodkaEl, 1oz, cointreauEl]
//     addins: [.5oz, limeJuiceEl, .25oz, cranberryJuiceEl]
//     garnish: null
// };

// const drinks = [oldFashioned, margarita, cosmopolitan];



// const easyDrinks = []

// const mediumDrinks = []

// const difficultDrinks = []

// var makeDrink = document.getElementById(drinkName);
//      
// }

// renderDrink()

