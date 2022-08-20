let quantity = Number(prompt('Quantas cartas (de 2 a 14)?'));
const cards = document.querySelector('.cards');
let gameCards = [];
let selectedCards = [];

const card1 = '<div class="card"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/bobrossparrot.gif" alt="bobrossparrot"></div></div>'
const card2 = '<div class="card"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/explodyparrot.gif" alt="bobrossparrot"></div></div>'
const card3 = '<div class="card"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/fiestaparrot.gif" alt="bobrossparrot"></div></div>'
const card4 = '<div class="card"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/metalparrot.gif" alt="bobrossparrot"></div></div>'
const card5 = '<div class="card"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/revertitparrot.gif" alt="bobrossparrot"></div></div>'
const card6 = '<div class="card"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/tripletsparrot.gif" alt="bobrossparrot"></div></div>'
const card7 = '<div class="card"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/unicornparrot.gif" alt="bobrossparrot"></div></div>'
const cardList = [card1, card2, card3, card4, card5, card6, card7];

function game(){
    while (quantity < 4){
        quantity = Number(prompt('Você só pode escolher até 14 cartas. Quantas cartas (de 4 a 14)?'));
    }
    while (quantity > 14){
        quantity = Number(prompt('Você só pode escolher até 14 cartas. Quantas cartas (de 4 a 14)?'));
    }
    while ((quantity % 2) !== 0) {
        quantity = Number(prompt('Você só pode escolher um número par de cartas. Quantas cartas (de 4 a 14)?'));
    }

    index = 0
    while (index < quantity / 2){
        gameCards.push(cardList[index]);
        gameCards.push(cardList[index]);
        index++;
    }

    function randomize() { 
        return Math.random() - 0.5; 
    }

    gameCards.sort(randomize);
}

let counter = 0;

function cardQuantity(){
    while (counter < quantity){
        cards.innerHTML = cards.innerHTML + gameCards[counter];
        counter++
    }
}

console.log(gameCards)

game();
cardQuantity();

function chooseCard(chosenCard){
    chosenCard.classList.toggle('opacity')

    console.log(chosenCard)
}
