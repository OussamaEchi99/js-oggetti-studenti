// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// Stampo i dati dello studente all'ineterno di una array con dentro uno oggetto
let student = {
    nome: 'Oussama',
    Cognome: 'Echi',
    eta: '22'

};

for (let key in student) {
    console.log(key);
}