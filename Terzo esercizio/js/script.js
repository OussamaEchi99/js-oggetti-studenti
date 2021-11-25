// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// Stampo i dati dello studente all'interno di una array con dentro uno oggetto
let students = [

    {
        nome: 'Oussama',
        cognome: 'Echi',
        eta: 22
    },

    {
        nome: 'Darius',
        cognome: 'Coman',
        eta: 20
    },

    {
        nome: 'Sebastian lillo',
        cognome: 'Sebastian',
        eta: 21
    },

    {
        nome: 'Alberto',
        cognome: 'Bisetti',
        eta: 23
    },

    {
        nome: 'Patrick',
        cognome: 'Galasso',
        eta: 40
    },

    {
        nome: 'Emanuele',
        cognome: 'Seta',
        eta: 25
    }
];

// Input dell'utente del nome, cognome e etò
const userInputStudentName = prompt('Scrivi il Nome dello studente?');
const userInputStudentLastName = prompt('Scrivi il Cognome dello studente?');
const userInputStudentAge = parseInt(prompt('Scrivi l\'età dello studente?'));

// Le informazioni dell'utente vengono pushate all'interno dell'array dentro un object
students.push({ nome: userInputStudentName, cognome: userInputStudentLastName, eta: userInputStudentAge });
console.log(students);

// Leggo i nome e cognome di tutti gli studenti con il for e dot notation
for (let i = 0; i < students.length; i++) {
    // Variabile
    thisStudent = students[i];

    // Dot Notation
    console.log( thisStudent.nome );
    console.log( thisStudent.cognome );

    // Bracket Notation
    // console.log( thisStudent['nome'] );
    // console.log( thisStudent['cognome'] );
}