## Purpose/ Game Overview
___________________________________

The goal of the game is to work your way from novice to Bar Manager by passing three levels of mixology challenges that test your knowledge on increasingly diffucult drinks. As the you progress through the levels, the complexity of the drinks increase and proportional measurements come into play. In the final level, your patrons will use flavor descriptors to tell you what type of drink they are in the mood for and you must choose off the cocktail menu the most appropriate option, as well as make it correctly. If you pass all 3 levels, you win the game.

### Details
__________________________________

At the start of the game, the user will see a bar of ingredients. When the user clicks start, a glass will show up in front of them with a name of a drink and a timer of 30 seconds will be initiated. The glass will show compartmental placeholders, indicating to the user how many ingredients the drink contains. If the timer runs out, the player loses. When the user hits submit drink button, the drink will be checked for proper ingredients. If the drink is wrong, player loses, if drink is correct, there will be a new glass placed, to 3 glasses per level (each drink of increasing complexity). When all glasses are filled accurately, the user will move on to level 2. In this level, user will once again need to choose the right ingredients, but this time, they must also accurately increment the Oz's of each ingredient in the glass (by .5 oz increments, _we will consider "a splash" as .5oz_) to the appropriate proportion. Once again, there will be 3 glasses needed to be accuretely filled before reaching level 3. In this level, the player will have access to the names of some popular drinks on the cocktail menu. An indecisive customer at the bar will use decriptive language to tell you what they are in the mood for, and the user must select the most appropriate drink as well as make it as required in levels 1 and 2. If the player successfully passes this level, they have won the game and are able to restart with a new shuffled list of drinks.


## User Stories
______________________________________

__A user should be able to:__

* Start the game and levels with the allocated buttons
* Select any bar ingredient to put in the glass
* Remove any ingredient in the glass before submission
* See the timer countdown at all times
* Start the game from the beginning at any time with the "start over" button
* See the effects of their ingredient selection in the glass
* Receive an alert after submission if drink submission was correct or incorrect
* See their level status and drink number

__A user should _not_ be able to:__

* Remove selected ingredients __after__ submission button is clicked
* Select more ingredients than what is allocated in the glass
* Restart level unless at level 1


## Wireframes
______________________________________



## Technologies
______________________________________

HTML- HTML will be used to render text at the genesis of the game to articulate the objectives and rules of the game. HTML will also be used to indicate to the player what level/drink they are on, and include semantic buttons to guide player through object selection and submission. The ingredients on the bar will likey be img objects in the form of buttons.

CSS- CSS will be used to style the 'bar' and render selectable ingredients (in the form of image positioning across the bar) needed to play the game. Transitions and animations will be used to fill the glass with the ingredients selected to match the ingredient's properties (color).

Javascript- Javascript will be used throughout to select objects (buttons) from HTML, add event listners, and interact with the user via various choices and checks for accuracy and level progression.