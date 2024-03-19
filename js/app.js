// *SNACK 1*
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.
// esempio:
// {
//   nomeTavolo: 'Tavolo VIP',
//   nomeOspite: 'Brad Pitt',
//   posto: 1
// }


const vipNames = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

let vipTable = vipNames.map((vip, i) => {
    return {
        table: 'vip',
        name: vip,
        sit: i + 1,
    }
})

console.log(vipTable);

// *SNACK 2*
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);

const studentsList = [ 
    {
        id: 213,
        name: 'Marco Della Rovere',
        grade: 78,
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grade: 96,
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grade: 48,
    },
    {
        id: 145,
        name: 'Gaia Borromini ',
        grade: 74,
    },
    {
        id: 196,
        name: 'Luigi Grimaldello ',
        grade: 68,
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grade: 50,
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grade: 84,
    },
]

let studentsListCap = studentsList.map((student) => {
    return {
        id: student.id,
        name: student.name.toLocaleUpperCase(),
        grade: student.grade,
    }
})

console.log(studentsListCap)

// oppure

studentsList.forEach((student) => {
    student.name = student.name.toLocaleUpperCase()
})

console.log(studentsList)

// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

let studentsVoteOver70 = studentsList.filter((student) => student.grade > 70)

console.log(studentsVoteOver70)


// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// let studentsVoteOver70IdOver120 = studentsList.filter((student) => ((student.grade > 70) &&(student.id > 120)))

// oppure

function myFun(student) {
    if ((student.id > 120) && (student.grade > 70)) {
        return true
    } else {
        return false
    }
}
let studentsVoteOver70IdOver120 = studentsList.filter(myFun)

console.log(studentsVoteOver70IdOver120)

// Questo è l’elenco degli studenti:
// Id   Name                    Grades
// 213  Marco della Rovere      78
// 110  Paola Cortellessa       96
// 250  Andrea Mantegna 	      48
// 145  Gaia Borromini          74
// 196  Luigi Grimaldello 	  68
// 102  Piero della Francesca   50
// 120  Francesca da Polenta    84