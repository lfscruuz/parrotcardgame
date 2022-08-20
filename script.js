let quantity = Number(prompt('Quantas cartas (de 2 a 14)?'));
const cards = document.querySelector('.cards');
const card = ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1'];
let selectedCards = [];


function game(){
    while (quantity > 14){
        quantity = Number(prompt('Você só pode escolher até 14 cartas. Quantas cartas (de 2 a 14)?'));
    }
    while ((quantity % 2) !== 0) {
        quantity = Number(prompt('Você só pode escolher um número par de cartas. Quantas cartas (de 2 a 14)?'));
    }

    index = 0
    while (index < quantity / 2){
        selectedCards.push(card[index]);
        selectedCards.push(card[index]);
        index++;
    }

    console.log(selectedCards)

    function randomize() { 
        return Math.random() - 0.5; 
    }

    selectedCards.sort(randomize);
}

function cardQuantity(){

    let counter = 0;

    while (counter < quantity){
        cards.innerHTML = cards.innerHTML + (
            `<div class="card ${selectedCards[counter]}" onclick="chooseCard(this)">
                carta ${selectedCards[counter]}
            </div>`);
        counter++
    
    }
}

game();
cardQuantity();

// const card = document.querySelector('.card')
// const cardFront = document.querySelector('.cardFront')
// const cardBack = document.querySelector('.cardBack')

// console.log(cardFront)

// function chooseCard(choice){
//     if (cardFront){
//         card.innerHTML = `<img src="./media/bobrossparrot.gif" alt="back">`
//         choice.classList.remove('cardFront')
//     } else {
//         card.innerHTML = `<img src="./media/bobrossparrot.gif" alt="bobrossparrot">`
//     }
    
// }