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

//contatore

const counter = {
  seconds: 0,
  start: function () {
    const myCounter = setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
      if (this.seconds === 10) {
        clearInterval(myCounter);
      }
    }, 1000);
  },
};
counter.start();
