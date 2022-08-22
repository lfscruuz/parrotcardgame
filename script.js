let quantity = Number(prompt('Quantas cartas (de 4 a 14)?'));
const cards = document.querySelector('.cards');
let gameCards = [];
let selectedCards = [];
let wonCards = [];
let wonGames = 0;
let globalCounter = 0;

const card1 = '<div class="card card1"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/bobrossparrot.gif" alt="bobrossparrot"></div></div>'
const card2 = '<div class="card card2"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/explodyparrot.gif" alt="bobrossparrot"></div></div>'
const card3 = '<div class="card card3"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/fiestaparrot.gif" alt="bobrossparrot"></div></div>'
const card4 = '<div class="card card4"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/metalparrot.gif" alt="bobrossparrot"></div></div>'
const card5 = '<div class="card card5"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/revertitparrot.gif" alt="bobrossparrot"></div></div>'
const card6 = '<div class="card card6"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/tripletsparrot.gif" alt="bobrossparrot"></div></div>'
const card7 = '<div class="card card7"><div class="front ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/front 1.png" alt="front 1"></div><div class="back ${gameCards[counter]}" onclick="chooseCard(this);"><img src="./media/unicornparrot.gif" alt="bobrossparrot"></div></div>'
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



function cardQuantity(){
    let counter = 0;
    while (counter < quantity){
        cards.innerHTML = cards.innerHTML + gameCards[counter];
        counter++
    }
}

game();
cardQuantity();

function chooseCard(chosenCard){
    chosenCard.classList.toggle('opacity')
 
    let parentCard = chosenCard.parentNode

    if (selectedCards.includes(parentCard)){
        selectedCards = [];
    }else{
        selectedCards.push(chosenCard)
    }
    if (selectedCards.length === 2){
        setTimeout(checkMatch, 1000)
        function checkMatch(){
            if (selectedCards[0].parentNode.classList[1] === selectedCards[1].parentNode.classList[1]){
                wonCards.push(selectedCards.parentNode)
                selectedCards = [];
                globalCounter++
                console.log(globalCounter)
                console.log(quantity)
                
            } else if(selectedCards[0].parentNode.classList[1] !== selectedCards[1].parentNode.classList[1]){
                // selectedCards[0].parentNode.classList.toggle('opacity')
                // selectedCards[1].parentNode.classList.toggle('opacity')
                selectedCards.map((card)=>{card.classList.toggle('opacity')});
                selectedCards = [];
            }
            
        }
    }else if(selectedCards.length > 2){
        selectedCards.map((card)=>{card.classList.toggle('opacity')});
        selectedCards = [];
    }

}

while (wonCards.length > 0 && globalCounter <= quantity / 2){
    if (globalCounter === quantity / 2){
        alert('terminou o jogo')
        // let question = prompt('quer jogar de novo?')
        // if (question === 'sim'){
        //     quantity = Number(prompt('Quantas cartas (de 4 a 14)?'));
        //     game()
        // }else{
        //     break
        // }
    }
}
