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

 
//data structure:

const cocktails = [
    {
        name: "Old Fashion",
        ingredients: ["Bourbon", "Bitters", "Orange Peel"],
    },
    {
        name: "Margarita",
        ingredients: ["Tequila", "Cointreau","Lime Juice", "Salt"],
    },
    {
        name: "Cosmopolitan",
        ingredients: ["Vodka", "Cointreau", "Lime Juice", "Cranberry Juice"],
    },
    {
        name: "Negroni",
        ingredients: ["Gin", "Campari", "Vermouth"],
    },
    {
        name: "Moscow Mule",
        ingredients: ["Vodka","Ginger Beer","Lime"],
    },
    {
        name: "Sidecar",
        ingredients: ["Cognac", "Cointreau","Lemon Juice"],
    },
    {
        name: "Manhattan",
        ingredients: ["Tequila", "Cointreau","Lime Juice","Salt"],
    },
    {
        name: "Paloma",
        ingredients: ["Tequila","Lime Juice","Grapefruit Juice"],
    },
    {
        name: "Sazerac",
        ingredients: ["Whiskey","Simple Syrup","Bitters","Absinthe"],
    },
    {
        name: "French 75",
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

//constants

const displayEl = document.querySelector('span');
const pouroutBtn = document.getElementById("pourout");
const exitBtn = document.getElementById("exitGame");
const ingredients = document.querySelectorAll('.ing')
let round = '';
let rndmCocktailIdx;

let guess = [];


//add timer
// var deadline = new Date(":15").getTime(); 
  
// var x = setInterval(function() { 
  
// var now = new Date().getTime(); 
// var seconds = Math.floor((t % (1000 * 60)) / 1000);  
// document.getElementById("second").innerHTML =seconds;  
// if (t < 0) { 
//         clearInterval(x); 
//         document.getElementById("demo").innerHTML = "TIME UP";  
//         document.getElementById("second").innerHTML = '0'; } 
// }, 1000); 

// function start_timer() {
//     var timer = document.getElementById("my_timer").innerHTML;
//     var arr = timer.split(":");
//     var hour = arr[0];
//     var min = arr[1];
//     var sec = arr[2];
//     if(sec === 0) {
//         if(min === 0) {
//             if(hour === 0){
//                 alert("Out of Time!");
//                 window.location.reload();
//                 return;
//             }
//             hour--;
//             min = 0;
//             if(hour < 10) hour = "0" + hour;
//         }
//         min--;
//         if(min < 10) min = "0" + min;
//         sec = 15;
//     }
//     else sec --;
//     if(sec < 10) sec = "0" + sec;

//     document.getElementById("my_timer").innerHTML = hour + ":" + min + ":" + sec;
//     setTimeout(start_timer, 1000);
// }

document.getElementById('components') //listens for click on any ingredients, then runs push function
        .addEventListener('click', guessPush)
       
        document.getElementById('components')
        .addEventListener('click', renderCup)


//nest for each function-- listen to servedrink click then it loops through each array to see if it includes the selected item

document.getElementById("serveDrink")
    .addEventListener("click", function() {
        let win = false;
        console.log(guess);
        guess.forEach(e => { 
                round.forEach(re => {
                     
            if(e !== re){
                win = false;
            return;
            }
            else {
                win = true;
            }
    })
})
if (win === true) {
    console.log('you win');
    alert("you win!");
} 
else {
    console.log('you lose');
    alert("you lose!");
}
    })     
               


document.getElementById("start")
    .addEventListener("click", function() {
    rndmCocktailIdx = Math.floor(Math.random() * (cocktails.length-1)); //pulls a random index of cocktails
    displayEl.innerText = cocktails[rndmCocktailIdx].name; //logs the name associated with that index

});


//sets the divs of clicked ingredient to correspond to that drinks color and stack them on each other
function renderCup(evt) {
    let selectedIngredient = evt.target.getAttribute('alt');
    let bigDiv = document.getElementById('glass');
    switch(selectedIngredient) {
        case 'Cranberry Juice':
            console.log('you picked cranberry');
            let cranDiv =  document.createElement('div');
            cranDiv.classList.add('ingBox');
            cranDiv.setAttribute('id', 'cranId')
            bigDiv.appendChild(cranDiv);
            break;

        case 'Lime Juice':
            console.log('you picked lime juice');
            let limeJuiceDiv =  document.createElement('div');
            limeJuiceDiv.classList.add('ingBox');
            limeJuiceDiv.setAttribute('id', 'limeJuiceId')
            bigDiv.appendChild(limeJuiceDiv);
            break;

        case 'Bitters':
            console.log('you picked bitters');
            let bittersDiv =  document.createElement('div');
            bittersDiv.classList.add('ingBox');
            bittersDiv.setAttribute('id', 'bittersId')
            bigDiv.appendChild(bittersDiv);
            break;

        case 'Cointreau':
            console.log('you picked cointreau');
            let cointreauDiv =  document.createElement('div');
            cointreauDiv.classList.add('ingBox');
            cointreauDiv.setAttribute('id', 'cointreauId')
            bigDiv.appendChild(cointreauDiv);
            break;

        case 'Absinthe':
            console.log('you picked absinthe');
            let absintheDiv =  document.createElement('div');
            absintheDiv.classList.add('ingBox');
            absintheDiv.setAttribute('id', 'absintheId')
            bigDiv.appendChild(absintheDiv);
            break;

        case 'Simple Syrup':
            console.log('you picked simple syrup');
            let simpsyrupDiv =  document.createElement('div');
            simpsyrupDiv.classList.add('ingBox');
            simpsyrupDiv.setAttribute('id', 'simpsyrupId')
            bigDiv.appendChild(simpsyrupDiv);
            break;

        case 'Grapefruit Juice':
            console.log('you picked grapefruit juice');
            let grapefruitDiv =  document.createElement('div');
            grapefruitDiv.classList.add('ingBox');
            grapefruitDiv.setAttribute('id', 'grapefruitId')
            bigDiv.appendChild(grapefruitDiv);
            break;

        case 'Champagne':
            console.log('you picked champagne');
            let champagneDiv =  document.createElement('div');
            champagneDiv.classList.add('ingBox');
            champagneDiv.setAttribute('id', 'champagneId')
            bigDiv.appendChild(champagneDiv);
            break;

        case 'Cognac':
            console.log('you picked cognac');
            let cognacDiv =  document.createElement('div');
            cognacDiv.classList.add('ingBox');
            cognacDiv.setAttribute('id', 'cognacId')
            bigDiv.appendChild(cognacDiv);
            break;

        case 'Ginger Beer':
            console.log('you picked ginger beer');
            let gingerbeerDiv =  document.createElement('div');
            gingerbeerDiv.classList.add('ingBox');
            gingerbeerDiv.setAttribute('id', 'gingerbeerId')
            bigDiv.appendChild(gingerbeerDiv);
            break;

        case 'Vermouth':
            console.log('you picked vermouth');
            let vermouthDiv =  document.createElement('div');
            vermouthDiv.classList.add('ingBox');
            vermouthDiv.setAttribute('id', 'vermouthId')
            bigDiv.appendChild(vermouthDiv);
            break;

            case 'Lemon Juice':
            console.log('you picked lemon juice');
            let lemonJuiceDiv =  document.createElement('div');
            lemonJuiceDiv.classList.add('ingBox');
            lemonJuiceDiv.setAttribute('id', 'lemonJuiceId')
            bigDiv.appendChild(lemonJuiceDiv);
            break;

            case 'Campari':
            console.log('you picked campari');
            let campariDiv =  document.createElement('div');
            campariDiv.classList.add('ingBox');
            campariDiv.setAttribute('id', 'campariId')
            bigDiv.appendChild(campariDiv);
            break;

            case 'Sugar':
            console.log('you picked sugar');
            let sugarDiv =  document.createElement('div');
            sugarDiv.classList.add('ingBox');
            sugarDiv.setAttribute('id', 'sugarId')
            bigDiv.appendChild(sugarDiv);
            break;

            case 'Orange Peel':
            console.log('you picked vermouth');
            let orangePeelDiv =  document.createElement('div');
            orangePeelDiv.classList.add('ingBox');
            orangePeelDiv.setAttribute('id', 'orangePeelId')
            bigDiv.appendChild(orangePeelDiv);
            break;

            case 'Salt':
            console.log('you picked salt');
            let saltDiv =  document.createElement('div');
            saltDiv.classList.add('ingBox');
            saltDiv.setAttribute('id', 'saltId')
            bigDiv.appendChild(saltDiv);
            break;

            case 'Lime':
            console.log('you picked lime');
            let limeDiv =  document.createElement('div');
            limeDiv.classList.add('ingBox');
            limeDiv.setAttribute('id', 'limeId')
            bigDiv.appendChild(limeDiv);
            break;

            case 'Bourbon':
            console.log('you picked bourbon');
            let bourbonDiv =  document.createElement('div');
            bourbonDiv.classList.add('ingBox');
            bourbonDiv.setAttribute('id', 'bourbonId')
            bigDiv.appendChild(bourbonDiv);
            break;

            case 'Vodka':
            console.log('you picked vodka');
            let vodkaDiv =  document.createElement('div');
            vodkaDiv.classList.add('ingBox');
            vodkaDiv.setAttribute('id', 'vodkaId')
            bigDiv.appendChild(vodkaDiv);
            break;

            case 'Gin':
            console.log('you picked gin');
            let ginDiv =  document.createElement('div');
            ginDiv.classList.add('ingBox');
            ginDiv.setAttribute('id', 'ginId')
            bigDiv.appendChild(ginDiv);
            break;

            case 'Whiskey':
            console.log('you picked whiskey');
            let whiskeyDiv =  document.createElement('div');
            whiskeyDiv.classList.add('ingBox');
            whiskeyDiv.setAttribute('id', 'whiskeyId')
            bigDiv.appendChild(whiskeyDiv);
            break;

            case 'Tequilla':
            console.log('you picked tequilla');
            let tequillaDiv =  document.createElement('div');
            tequillaDiv.classList.add('ingBox');
            tequillaDiv.setAttribute('id', 'tequillaId')
            bigDiv.appendChild(tequillaDiv);
            break;

            case 'Dark Rum':
            console.log('you picked dark rum');
            let darkRumDiv =  document.createElement('div');
            darkRumDiv.classList.add('ingBox');
            darkRumDiv.setAttribute('id', 'darkRumId')
            bigDiv.appendChild(darkRumDiv);
            break;

            case 'Light Rum':
            console.log('you picked light rum');
            let lightRumDiv =  document.createElement('div');
            lightRumDiv.classList.add('ingBox');
            lightRumDiv.setAttribute('id', 'lightRumId')
            bigDiv.appendChild(lightRumDiv);
            break;
    }}

    


function ingCheck (array) { //checks chosen array length, to add the guesses to and array AND remove the event listener so user can no longer select any more ingredients
    if(guess.length === array.length) {
        components.removeEventListener("click", guessPush) 
        console.log('max ingredients');
        components.removeEventListener("click", renderCup) 
    }   
}


// 
function guessPush (e) {
    
    let currentDrink = cocktails[rndmCocktailIdx].ingredients //finds random index number


    if(e.target.alt === undefined) return //if they click in white space it doesnt return anything

    guess.push(e.target.alt) //push the users guess of ingredient into an array

    e.target.style.display = "none" //disappears after selected

    ingCheck(currentDrink)
    
    round = currentDrink; //needed to make this a global variable thats why round is assigned at top to empty
    // round.push(currentDrink);
    currentDrink = ''; //clears out the currentDrink array now that its in round

};