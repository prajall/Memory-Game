const cardArray = [
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "fries", img: "images/fries.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "milk-shake", img: "images/milk-shake.png" },
    { name: "pizza", img: "images/pizza.png" },
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "fries", img: "images/fries.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "milk-shake", img: "images/milk-shake.png" },
    { name: "pizza", img: "images/pizza.png" },
];
function sortArray() {
    cardArray.sort(() => Math.random() - 0.5);
}
sortArray();

// creating a board that holds the image cards
const gridDiv = document.querySelector("#grid");
let clickedCards = [];
let flippedCards = 0;
if (clickedCards.length > 2) {
    clickedCards = [];
}

// Load the board
function createBoard() {
    let clickedCards = [];
    let flippedCards = 0;
    for (let i = 0; i < 12; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/qn-mark.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDiv.append(card);
    }
}
createBoard();

// flipping a card when its clicked

function flipCard() {
    const cardId = this.getAttribute("data-id");
    this.setAttribute("src", cardArray[cardId].img);
    clickedCards.push(cardId);
    console.log(clickedCards);
    if (clickedCards.length >= 2) {
        setTimeout(() => {
            if (clickedCards[0] == clickedCards[1]) {
                unflip(clickedCards);
            }
            if (clickedCards.length > 2) {
                unflip(clickedCards);
            }
            if (
                cardArray[clickedCards[0]].name !=
                cardArray[clickedCards[1]].name
            ) {
                unflip(clickedCards);
                clickedCards = [];
                console.log(flippedCards);
            } else if (
                cardArray[clickedCards[0]].name ===
                cardArray[clickedCards[1]].name
            ) {
                clickedCards = [];
                flippedCards += 2;
                console.log(flippedCards);
                if (flippedCards >= 12) {
                    endGame();
                }
            }
        }, 500);
    }
}

function unflip(clickedCards) {
    for (let i = 0; i < clickedCards.length; i++) {
        document
            .querySelector(`img[data-id='${clickedCards[i]}']`)
            .setAttribute("src", "images/qn-mark.png");
    }
}
function endGame() {
    alert("Congratulations you flipped all cards successfully");
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGame);

function resetGame() {
    sortArray();
    removeBoard();
    createBoard();
    flippedCards = 0;
}
function removeBoard() {
    gridDiv.innerHTML = "";
}
