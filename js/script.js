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


const [b1, b2, b3, b4, b5, b6] = bikes;

console.log(b1, b2, b3, b4, b5, b6);


let min = Math.min(...weightsList);

console.log(min);


console.log(`La bici più leggera è la ${b3.name} che pesa ${min} Kg`);


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

        fouls : 0
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

    return Math.floor(Math.random() * (max - min + 1) ) + min;
}