const traditionalCode = document.querySelector("#traditionalCode");
const traditionalResult = document.querySelector("#traditionalResult");
const traditionalResult = document.querySelector("#traditionalResult");
const traditionalResult = document.querySelector("#traditionalResult");

let a = 5;
let b = 8;
//Exspression function tradizionale
const traditionalSum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;
return a + b;

//scrittura compatta
const arrowSum = (a, b) => (arrowResult.textContent = a + b); // return implicito, senza graffe, quando il corpo della funzione è una sola operazione DA SCRIVERE OBBLIGATORIAMENTE IN UNA SOLA RIGA
return a + b;

traditionalCode.innerHTML =
  "<code>const traditionalSum = function (a + b) {return a + b;}</code>";
traditionalResult.textContent = traditionalSum(8, 5);

arrowCode.innerHTML =
  "<code>const arrowSum = (a + b) => {return a + b;}</code>";

arrowResult.textContent = arrowSum(8, 5);

//this contestuale
//const utente = function (nome) {
//  console.log(`ciao, ${this.nome}`);
//};
//utente("pippo");

const utente = {
  nome: "pippo",
  saluta: function () {
    console.log(`ciao, ${this.nome}`);
  },
};
utente.saluta();

const developer = function (language) {
  console.log(`sono ${this.name}, sviluppatore ${this.language}`);
};

const newDeveloper = {
  name: "Mario",
  language: "javaScript",
};
developer.call(newDeveloper); // richiama il secondo this focussato

//this lessicale: Arrow function, erendeta il valore dal punto in cui è chiamata e da come è chiamalta la funzione

const myCar = {
  brand: "fiat",
  model: "500",
  obtainDescription: function () {
    const describeCar = () => {
      return `Auto: ${this.brand} ${this.model}`;
    };
    return describeCar();
  },
};

console.log(myCar.obtainDescription());

function container() {
  const myArrow = () => {
    console.log(`Eredito il this dall'invocaizone della finzione: ${this}`);
  };
  myArrow();
}
container.call("Antonio");
container.call("Giovanna");

// destructuring
const notObject = document.querySelector("#notObject");
const yesArray = document.querySelector("#yesArray");
const yesObject = document.querySelector("#yesObject");
const modernObject = document.querySelector("#modernObject");

const namesArray = ["Pippo", "Pluto", "Paperino"];
const student = {
  name: "Mario",
  surname: "Rossi",
  age: 25,
};

const record = {
  title: "dark side of the moon",
  author: "Pink Floyd",
  year: 1973,
};
notObject.textContent = student;
yesArray.textContent = namesArray;
yesObject.textContent = `${student.studentName}, ${student.surname}, ${student.age}`;

const { studentName, surname, age } = student; //se ;'oggetto si modifica i valori delle variabili non cambiano, in qanto con questa con questa destrutturazione sono fotografie dell'oggetto in un dato punto
modernObject.textContent = `${studentName}, ${surname}, ${age}`;

let { title, author, year } = record; //destrutturo con let quando devo manipolare i valori dell'oggetto  senza intaccare l'oggetto stesso
((title = "Led Zeppelin IV"), (author = "Led Zeppelin")); //Modifica il valore delle varialil senza intaccarel'oggetto originale
console.log(record);
anotherObject.textContent = `${title},${author},${year}`;

//spread e rest

const myNamesArray = ["Pippo", "Pluto", "Paperino"];
// const copyNames = myNamesArray; // La copia con l'assegnazione crea due cloni, per cui se cambia il secondo cambia anche il primo
const copyNames = [...myNamesArray];

console.log(myNamesArray, copyNames);

copyNames[1] = "Paperone";
console.log(myNamesArray, copyNames);

//copiare

const firstPerson = {
  personName: "Mario",
  address: {
    via: "Roma",
    citta: "Napoli",
  },
};

const otherAddress = { ...firstPerson.address };

const otherPerson = { ...firstPerson };

otherPerson.address = { ...otherAddress };

otherPerson.address.citta = "Milano";

console.log(firstPerson);
console.log(otherPerson);

const mySum = (...values) => {
  let myTotal = 0;
  for (let i = 0; i < values.length; i++) {
    myTotal += values[i];
  }
  return myTotal;
};
console.log(`somma con tre parametri: ${mySum(3, 4, 5)}`);
console.log(`somma con due parametri: ${mySum(8, 9)}`);
console.log(`somma con quattro parametri: ${mySum(12, 23, 45, 10)}`);

// Metodi array ES6+
namesArray.forEach((name) => {
  //equivale al for o al for classico
  console.log(name);
});

const multiply = firstNumberArray.map((number) => {
  return number * 2;
});
console.log(firstNumberArray);
console.log(multiply);
//FILTER

const genericNumbers = [2, 5, 16, 23, 75, 98, 67];

const pairs = genericNumbers.filter((number) => number % 2 === 0);
console.log(pairs);

const genericNames = [
  "Antonio",
  "Nicola",
  "Anna",
  "Giovanni",
  "Anselmo",
  "Mario",
];
const namesWithA = genericNames.filter((name) => name.startsWith("A"));

console.log(namesWithA);

//INCLUDES

const users = [
  {
    userName: "Mario",
    age: 25,
  },
  {
    userName: "Anna",
    age: 22,
  },
  {
    userName: "Stefano",
    age: 28,
  },
];

console.log(users.includes("Mario"));
const finded = users.find((user) => user.userName === "Mario");
console.log(finded);

//RECUCE
const total = genericNumbers.reduce((acc, number) => acc + number);
console.log(total);

//SORT

console.log(genericNumbers.sort()); //se non usao per generare un array ordiato, modifica l'ordine dell'array originario
console.log(genericNumbers);
console.log(genericNumbers[3]);

//SORT

console.log(genericNumbers.reverse());
console.log(genericNumbers.sort);
const correctedSort = genericNumbers.sort((a, b) => a - b);
console.log(correctedSort);
