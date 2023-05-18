/* :: main js dice_game :: */

'use strict';

const btnDice = document.querySelector('.dice-button');
const btnReset = document.querySelector('.reset-button');
let scoreOne = document.querySelector('.score_one');
let scoreTwo = document.querySelector('.score_two');

let winneralert = document.querySelector('.who_wins');
let playerOne = document.querySelector('.p_one');
let playerTwo = document.querySelector('.p_two');

/** :: the dices :: */
let diceOneOne = document.querySelector('.dice_one_f1');
let diceOneTwo = document.querySelector('.dice_one_f2');
let diceOneThree = document.querySelector('.dice_one_f3');
let diceOneFour = document.querySelector('.dice_one_f4');
let diceOneFive = document.querySelector('.dice_one_f5');
let diceOneSix = document.querySelector('.dice_one_f6');

let diceTwoOne = document.querySelector('.dice_two_f1');
let diceTwoTwo = document.querySelector('.dice_two_f2');
let diceTwoThree = document.querySelector('.dice_two_f3');
let diceTwoFour = document.querySelector('.dice_two_f4');
let diceTwoFive = document.querySelector('.dice_two_f5');
let diceTwoSix = document.querySelector('.dice_two_f6');

window.onload = winneralert.innerText = 'dice on!';

let numOne = 0;
let numTwo = 0;


/* game object:*/

let diceGame = {

    diceAction(){
        let diceOne = Math.floor((Math.random() * 6 ) +1);
        let diceTwo = Math.floor((Math.random() * 6 ) +1);
    
    if( diceOne > diceTwo){
        
        numOne++ 
        scoreOne.innerText = `  ${numOne}`; 
        winneralert.innerText = 'Player 1 Wins!';
        playerOne.style.color = 'rgb(255, 41, 237)';
        playerTwo.style.color = 'white';
        winneralert.style.color = 'white';

    }
    if( diceTwo > diceOne){
        
        numTwo++ 
        scoreTwo.innerText = `  ${numTwo}`; 
        winneralert.innerText = 'Player 2 Wins!';
        playerTwo.style.color = 'rgb(21, 219, 127)';
        playerOne.style.color = 'white';
        winneralert.style.color = 'white';
    }

    else if( diceOne === diceTwo ){
        winneralert.innerText = 'Draw !';
        winneralert.style.color = 'yellow';
        playerTwo.style.color = 'white';
        playerOne.style.color = 'white';
    }
    

    diceOne === 1 ? diceOneOne.style.zIndex = '1' : diceOneOne.style.zIndex = '0';
    diceOne === 2 ? diceOneTwo.style.zIndex = '1' : diceOneTwo.style.zIndex = '0';
    diceOne === 3 ? diceOneThree.style.zIndex = '1' : diceOneThree.style.zIndex = '0';
    diceOne === 4 ? diceOneFour.style.zIndex = '1' : diceOneFour.style.zIndex = '0';
    diceOne === 5 ? diceOneFive.style.zIndex = '1' : diceOneFive.style.zIndex = '0';
    diceOne === 6 ? diceOneSix.style.zIndex = '1' : diceOneSix.style.zIndex = '0';
  
    /* dice two */
    diceTwo === 1 ? diceTwoOne.style.zIndex = '1' : diceTwoOne.style.zIndex = '0';
    diceTwo === 2 ? diceTwoTwo.style.zIndex = '1' : diceTwoTwo.style.zIndex = '0';
    diceTwo === 3 ? diceTwoThree.style.zIndex = '1' : diceTwoThree.style.zIndex = '0';
    diceTwo === 4 ? diceTwoFour.style.zIndex = '1' : diceTwoFour.style.zIndex = '0';
    diceTwo === 5 ? diceTwoFive.style.zIndex = '1' : diceTwoFive.style.zIndex = '0';
    diceTwo === 6 ? diceTwoSix.style.zIndex = '1' : diceTwoSix.style.zIndex = '0';

    console.log('diceOne: ' + diceOne);
    console.log('diceTwo: ' + diceTwo);

    },

    diceReset(){

    winneralert.innerText = 'dice on!';
    numOne = '';
    numTwo = '';
    scoreOne.innerText = `  ${numOne}`; 
    scoreTwo.innerText = `  ${numTwo}`; 
    diceOneSix.style.zIndex = '1';
    diceTwoSix.style.zIndex = '1';
    playerTwo.style.color = 'white';
    playerOne.style.color = 'white';

    }
};


btnDice.addEventListener('click', diceGame.diceAction);
btnReset.addEventListener('click', diceGame.diceReset);
