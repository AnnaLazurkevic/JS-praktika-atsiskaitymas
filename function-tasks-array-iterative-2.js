const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];

console.groupEnd();

console.groupCollapsed('1. Atspausdinti visus Informatikos fakulteto studentus');
{
const studentsIt = students.filter(function(facultIt){
  return facultIt.faculty === 'Informatikos fakultetas'
})

console.table(studentsIt)

}
console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Chemijos fakulteto studentus');
{
const studentsCh = students.filter(function(facultCh){
  return facultCh.faculty==='Chemijos fakultetas'
})
console.table(studentsCh)
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{
  const studentsEl = students.filter(function(facultEl){
    return facultEl.faculty==='Elektros ir elektronikos fakultetas'
  })
  console.table(studentsEl)
}

console.groupEnd();

console.group('4. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{
  const avgItFakSt = students
    .filter(s => s.faculty === 'Informatikos fakultetas')
    .map(({ name, surname, modules }) => ({ fullname: name + ' ' + surname, modules }))
    .map(({ fullname, modules }) => ({
      fullname,
      avg: Math.round(
        modules.reduce((avgSum, { marks, credits }) => avgSum + marks.reduce((avg, m) => avg + m / marks.length, 0) * credits, 0)
        / modules.reduce((creditSum, module) => creditSum + module.credits, 0) * 10
      ) / 10
    }))
  console.table(avgItFakSt);
}
console.groupEnd();

console.groupCollapsed('5. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{
  const avgChemFakSt = students
    .filter(s => s.faculty === 'Chemijos fakultetas')
    .map(({ name, surname, modules }) => ({ fullname: name + ' ' + surname, modules }))
    .map(({ fullname, modules }) => ({
      fullname,
      avg: Math.round(
        modules.reduce((avgSum, { marks, credits }) => avgSum + marks.reduce((avg, m) => avg + m / marks.length, 0) * credits, 0)
        / modules.reduce((creditSum, module) => creditSum + module.credits, 0) * 10
      ) / 10
    }))
  console.table(avgChemFakSt);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{
  const avgElektrFakSt = students
  .filter(s => s.faculty === 'Elektros ir elektronikos fakultetas')
  .map(({ name, surname, modules }) => ({ fullname: name + ' ' + surname, modules }))
  .map(({ fullname, modules }) => ({
    fullname,
    avg: Math.round(
      modules.reduce((avgSum, { marks, credits }) => avgSum + marks.reduce((avg, m) => avg + m / marks.length, 0) * credits, 0)
      / modules.reduce((creditSum, module) => creditSum + module.credits, 0) * 10
    ) / 10
  }))
console.table(avgElektrFakSt);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti tik pirmo kurso studentus');
{
  const firstCours = students.filter(function(firstCoursStudents){
    return firstCoursStudents.course===1
  })
  console.table(firstCours)
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinti tik antro kurso studentus');
{
  const secondCours = students.filter(function(secondCoursStudents){
    return secondCoursStudents.course===2
  })
  console.table(secondCours)
}
console.groupEnd();

// console.groupCollapsed('9. Atspausdinti tik trečio kurso studentus');
// {
//   const thirdCours = students.filter(function(thirdCoursStudents){
//     return thirdCoursStudents.course===3
//   })
//   console.log(thirdCours)
  
// }
// console.groupEnd();

// console.groupCollapsed('10. Atspausdinti tik ketvirto kurso studentus');
// {
//   const fourthCours = students.filter(function(thirdCoursStudents){
//     return thirdCoursStudents.course===4
//   })
//   console.log(fourthCours)
  
// }
// console.groupEnd();


console.groupCollapsed('11. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
{ const avgAllStud =students
  .filter(s => s.faculty )
  .map(({ name, surname, modules }) => ({ fullname: name + ' ' + surname, modules }))
  .map(({ fullname, modules }) => ({
    fullname,
    avg: Math.round(
      modules.reduce((avgSum, { marks, credits }) => avgSum + marks.reduce((avg, m) => avg + m / marks.length, 0) * credits, 0)
      / modules.reduce((creditSum, module) => creditSum + module.credits, 0)*10 
    ) / 10
  }))
console.table(avgAllStud);
}

