/*
  REGOLE
  - Le risposte vanno scritte in JavaScript sotto ogni commento.
  - Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
  - In alternativa: nel terminale, `node script.js`.
  - Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const utenti = [
  {
    id: 1,
    nome: "Mario",
    cognome: "Rossi",
    eta: 28,
    attivo: true,
    città: "Milano",
  },
  {
    id: 2,
    nome: "Anna",
    cognome: "Bianchi",
    eta: 35,
    attivo: false,
    città: "Roma",
  },
  {
    id: 3,
    nome: "Luca",
    cognome: "Verdi",
    eta: 22,
    attivo: true,
    città: "Milano",
  },
  {
    id: 4,
    nome: "Sara",
    cognome: "Neri",
    eta: 17,
    attivo: true,
    città: "Torino",
  },
  {
    id: 5,
    nome: "Marco",
    cognome: "Gialli",
    eta: 45,
    attivo: false,
    città: "Roma",
  },
  {
    id: 6,
    nome: "Chiara",
    cognome: "Rosa",
    eta: 30,
    attivo: true,
    città: "Milano",
  },
];

/* ESERCIZIO 1 — Arrow function compatta
   Riscrivi questa funzione come arrow function in forma compatta:
     function quadrato(n) { return n * n; }
   Chiamala con quadrato(5) e stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const quadrato = (n) => n * n;

console.log(quadrato(5));

/* ESERCIZIO 2 — Destructuring di oggetto
   Crea un oggetto "persona" con almeno 4 properties (es. nome, cognome, eta, città).
   Estrai 3 properties in 3 variabili usando destructuring.
   Stampa le 3 variabili.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const { nome, cognome, eta } = utenti[0];
// console.log(`${nome},${cognome},${eta}`);

const newPersonsArray = [];
utenti.forEach((user) => {
  newPersonsArray.push({
    nome: user.nome,
    cognome: user.cognome,
    eta: user.eta,
    citta: user.città,
  });
  const { nome, cognome, eta } = user;
  console.log(nome, cognome, eta);
});

/* ESERCIZIO 3 — Destructuring nei parametri
   Scrivi una arrow function "riepilogo" che riceve un utente e ritorna
   "Nome Cognome (eta anni)" usando destructuring nei parametri.
   Chiamala su utenti[0], utenti[1], utenti[2] e stampa i 3 risultati.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const riepilogo = (user) => {
  const { nome, cognome, eta } = user;
  return `${nome}, ${cognome}, ${eta}`;
};
utenti.forEach((utente) => {
  console.log(riepilogo(utente));
});
/* ESERCIZIO 4 — Spread su array
   Crea numeri = [1, 2, 3].
   Crea una copia indipendente con spread, fai push(99) sulla copia.
   Stampa originale e copia per dimostrare che l'originale non è cambiato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numbers = [1, 2, 3];
const copyNumbers = [...numbers];
copyNumbers.push(99);

console.log(numbers);
console.log(copyNumbers);

/* ESERCIZIO 5 — Spread per concatenare
   frutti  = ["mela", "banana"]
   verdure = ["carota", "spinaci"]
   Crea cibo che li unisca con spread. Stampalo.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const frutti = ["mela", "banana"];
const verdure = ["carota", "spinaci"];
const cibo = [...frutti, ...verdure];

console.log(cibo);

/* ESERCIZIO 6 — Spread su oggetto
   prodotto = { nome: "Cuffie", prezzo: 79.99 }
   Crea un nuovo oggetto con "disponibile: true" aggiunto, senza modificare prodotto.
   Stampa il nuovo oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotto = { nome: "Cuffie", prezzo: 79.99 };
const prodottoCopy = { ...prodotto, disponibile: true };
console.log(prodottoCopy);

/* ESERCIZIO 7 — forEach
   Stampa tutti gli utenti nel formato "- Nome Cognome (città)".
   Esempio: "- Mario Rossi (Milano)"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

utenti.forEach((utente) => {
  const user = `- ${utente.nome} ${utente.cognome} (${utente.città})`;
  console.log(user);
});

/* ESERCIZIO 8 — map a stringhe
   Usa map per creare nomiCompleti = ["Mario Rossi", "Anna Bianchi", ...].
   Stampa l'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const nameSurname = utenti.map((utente) => {
  return `${utente.nome} ${utente.cognome}`;
});
console.log(nameSurname);

/* ESERCIZIO 9 — map a oggetti
   Usa map per creare utentiPlus: array di oggetti dove ogni utente ha tutte
   le properties originali + una nuova property "descrizione" con valore
   "Nome Cognome, città".
   Suggerimento: usa spread per copiare le properties esistenti.
   Stampa il primo elemento di utentiPlus.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const utentiPlus = utenti.map(({ ...utente }) => {
  return {
    ...utente,
    descrizione: `${utente.nome}${utente.cognome}${utente.città}`,
  };
});
console.log(utentiPlus[0]);

/* ESERCIZIO 10 — filter attivi
   Usa filter per ottenere solo gli utenti con attivo: true.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const attivi = utenti.filter((utente) => utente.attivo);
console.log(attivi);

/* ESERCIZIO 11 — filter combinato
   Usa filter per ottenere solo gli utenti maggiorenni (eta >= 18) che vivono a Milano.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const majorAge = utenti.filter(
  (utente) => utente.eta >= 18 && utente.città === "Milano",
);

/* ESERCIZIO 12 — find
   Usa find per trovare il primo utente con id === 4.
   Stampa l'oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const userFour = utenti.find((utente) => utente.id === 4);
console.log(userFour);

/* ESERCIZIO 13 — reduce
   a) Usa reduce per calcolare l'età media (somma età / numero utenti). Stampa.
   b) Usa reduce per contare il numero di utenti attivi. Stampa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const sumAge = utenti.reduce((acc, user) => acc + user.eta, 0);
const averageAge = sumAge / utenti.length;
console.log(`È media: ${Number(averageAge.toFixed(2))}`);

/* ESERCIZIO 14 — sort
   a) Ordina gli utenti per eta crescente. Stampa l'array di nomi nell'ordine.
   b) Ordina gli utenti per nome alfabeticamente. Stampa l'array di nomi nell'ordine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const etaCrescente = utenti
  .sort((a, b) => a.eta - b.eta)
  .map((user) => user.nome);
console.log(etaCrescente);

const alfabetico = utenti
  .sort((a, b) => {
    if (a.nome < b.nome) return -1;
    if (a.nome < b.nome) return true;
  })
  .map((user) => user.nome);

console.log(alfabetico);
//modo alternativo

const alfabetivo2 = utenti.map((user) => user.nome).sort();
console.log(alfabetivo2);

/* ESERCIZIO 15 — Chaining
   Componi una catena di metodi che:
   - filtra gli utenti attivi
   - trasforma in array di stringhe "Nome Cognome"
   - ordina alfabeticamente
   Stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const chaining = utenti
  .filter((user) => user.attivo)
  .map((user) => `${user.name} ${user.cognome}`)
  .sort();

console.log(chaining);
