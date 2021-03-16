// ---ESERCIZIO_1---

// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


const bikes = [

    {
        name: "Mountain bike",

        weight: 20
    },

    {
        name: "Downhill",

        weight: 30
    },

    {
        name: "Bmx",

        weight: 18
    },

    {
        name: "Gravel bike",

        weight: 25
    },

    {
        name: "Tandem",

        weight: 45
    },

    {
        name: "Triciclo",

        weight: 35
    },
];

console.log(bikes);


let weightsList = [];

bikes.forEach((element) => {

    weightsList.push(element.weight);
});

console.log(weightsList);


let lighterBike = bikes[weightsList.indexOf(Math.min(...weightsList))];

const {name, weight} = lighterBike;

console.log(`La bici più leggera è la ${name} che pesa ${weight} Kg`);


// // ---ESERCIZIO_2---

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const teams = [

    {
        name : "Napoli",

        score : 0,

        fouls : 0
    },

    {
        name : "Milan",

        score : 0,

        fouls :  0
    },

    {
        name : "Roma",

        score : 0,

        fouls : 0
    },

    {
        name : "Lazio",

        score : 0,

        fouls : 0
    },

    {
        name : "Inter",

        score : 0,

        fouls : 0
    }
];

console.log(teams);


let newArray = [];

teams.forEach(element => {

    element.score = randomNumber(1, 50);

    element.fouls = randomNumber(1, 50);

    let {name, fouls} = element;

    newArray.push({name, fouls});
});

console.log(newArray);


function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// ---ESERCIZIO_3---

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


// Esempio_1_filter_(modo_1)


const mainArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(mainArray);


function genArray(array, a, b) {

    let newArray = array.filter((element) => {

        return element >= a && element <= b;

    });

    return newArray;
}

console.log(genArray(mainArray, 1, 6 ));


// Esempio_1_filter_(modo_2)


// const mainArray = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(mainArray);


// function genArray(array, a, b) {

//     let newArray = [];

//     array.filter((element, index) => {

//         if (index >= a && index <= b) {

//             newArray.push(element);
//         }

//     });

//     return newArray;
// }

// console.log(genArray(mainArray, 1, 6 ));


// Esempio_2_forEach


const myArray = ["Monitor", "CPU", "Mouse", "Keyboard", "GPU", "RAM", "SSD", "Cable"];

console.log(myArray);


function genArray(array, a, b) {

    let newArray = [];

    array.forEach(function(element, index) {

        if (index >= a && index <= b) {

            newArray.push(element);
        }
    });

    return newArray;
}

console.log(genArray(myArray, 1, 6));