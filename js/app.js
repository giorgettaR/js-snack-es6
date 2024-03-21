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


// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bicycles = [
    {
        name: 'Rouge',
        weight: 7.8,
    },
    {
        name: 'Mine',
        weight: 5,
    },
    {
        name: 'Oltre',
        weight: 6.7,
    },
    {
        name: 'Ponte',
        weight: 6.8,
    },
    {
        name: 'Nein',
        weight: 8,
    },
    {
        name: 'Rock',
        weight: 5.6,
    }
]

let lighterBicycle = bicycles[0]

for (let i = 1; i < bicycles.length; i++) {
    let currentBicycle = bicycles[i];
    if (currentBicycle.weight < lighterBicycle.weight) {
        lighterBicycle = currentBicycle
    }
}

console.log(lighterBicycle);

const {weight, name} = lighterBicycle;

console.log(`La bici ${name} è la più leggera e pesa ${weight} kg`)

//  oppure

const sortedBicycles = bicycles.toSorted((bike1, bike2) => {
    return bike1.weight - bike2.weight
    // if (bike1.weight < bike2.weight) {
    //     return -1
    // } else if (bike1.weight > bike2.weight) {
    //     return 1
    // } else {
    //     return 0
    // }
})

console.log(sortedBicycles[0])

// SNACK 4
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function getPf() {
    return Math.floor(Math.random() * 100) + 50
}

function getFs() {
    return Math.floor(Math.random() * 300) + 150
}

teams = [
    {
        name: 'Milan',
        pf:  0,
        fs: 0,
    },
    {
        name: 'Inter',
        pf: 0,
        fs: 0,
    },
    {
        name: 'Napoli',
        pf: 0,
        fs: 0,
    },
    {
        name: 'Roma',
        pf: 0,
        fs: 0,
    },
    {
        name: 'Juventus',
        pf: 0,
        fs: 0,
    }
]

teams.forEach((team) => {
    team.pf = getPf();
    team.fs = getFs()
})

// const message = teams.map((team) => {
//     const {name, fs} = team
//     return `La squadra ${name} ha subito ${fs} falli durante il campionato`
// })

const message = teams.map(({name, fs}) => {
        return `La squadra ${name} ha subito ${fs} falli durante il campionato`
    })

console.log(message)

let teamsShort = [];

for (let i = 0; i < teams.length; i++) {
    let currentTeam = teams[i]
    let teamShort = {
        name: currentTeam.name,
        pf: currentTeam.pf,
    }
    teamsShort.push(teamShort)
}

console.log(teamsShort)