const shuffle = (arrayOne) => {
    let count = arrayOne.length;
    let temp = 0;
    let index = 0;

    while (count > 0) {
        index = Math.floor(Math.random() * count);
        count--;
        temp = arrayOne[count];
        arrayOne[count] = arrayOne[index];
        arrayOne[index] = temp;
    }
    return arrayOne;
};


const getImgURL = (index) => {
    return fullDeck.cards[index].image;
};

const getImgCardcode = (index) => {
    return fullDeck.cards[index].code;
};

const sortedIndex = [];
const sortedCardArray = (array) =>{
    let shapesIndex = 0;
    let heartsIndex = 39;
    let diamondsIndex = 13;
    let clubsIndex = 26;
    for (let i =0;i<13;i++){
        sortedIndex.push(diamondsIndex);
        sortedIndex.push(clubsIndex);
        sortedIndex.push(heartsIndex);
        sortedIndex.push(shapesIndex);
        shapesIndex++;
        heartsIndex++;
        diamondsIndex++;
        clubsIndex++;
    }
    // console.log(fullDeck);
    // console.log(sortedIndex);

    // for (let i=0;i<52;i++){
    //     console.log(fullDeck.cards[sortedIndex[i]]);
    // }
    const cardsSorted = [];
    for (let i =0; i<sortedIndex.length; i++){
        for (let j=0; j<array.length; j++){
            if (array[j]===sortedIndex[i]){
                cardsSorted.push(array[j]);
            }
        }
    }
    return cardsSorted;
};

const cardsRandom = (number) => {
    let shapesIndex = 1;
    let heartsIndex = 40;
    let diamondsIndex = 14;
    let clubsIndex = 27;

    const cardIndex = [];
    /*use only 2 to 8 to avoid confusion*/

    for (let i=0;i<8;i++){
        cardIndex.push(diamondsIndex);
        cardIndex.push(clubsIndex);
        cardIndex.push(heartsIndex);
        cardIndex.push(shapesIndex);
        shapesIndex++;
        heartsIndex++;
        diamondsIndex++;
        clubsIndex++;
    }


    // for (let i =0;i<cardIndex.length;i++){
    //     console.log(getImgCardcode(cardIndex[i]));
    // }

    const shuffledIndex = shuffle(cardIndex);

    const returnedArrayIndex = [];
    for (let i=0; i<number; i++){
        returnedArrayIndex.push(shuffledIndex[i]);
    }

    return returnedArrayIndex;

};

