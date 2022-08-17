// const quantity = prompt('Quantas cartas (de 2 a 14?');
// const cards = document.querySelector('.cards')
// cardQuantity();

// function cardQuantity(){
//     let counter = 0;
//     while (counter < quantity){
//         cards.innerHTML = cards.innerHTML + `
//         <div class="card">
//         <img src="./media/front 1.png" alt="">
//         </div> 
//         `
//         console.log(counter)
//         counter++
    
//     }
// }

const card = document.querySelector('.card')
const cardFront = document.querySelector('.cardFront')
const cardBack = document.querySelector('.cardBack')

console.log(cardFront)

function chooseCard(choice){
    card.innerHTML = `<img src="./media/bobrossparrot.gif" alt="back">`
}