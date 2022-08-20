const quantity = Number(prompt('Quantas cartas (de 2 a 14)?'));
const cards = document.querySelector('.cards')




cardQuantity();

console.log(quantity)

function cardQuantity(){

    let counter = 1;

    while (counter < quantity + 16){
        cards.innerHTML = cards.innerHTML + (
            `<div class="card" onclick="chooseCard(this)">
                carta ${counter}
            </div>`);
        counter++
    
    }
}

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