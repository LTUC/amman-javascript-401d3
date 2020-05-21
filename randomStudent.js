'use strict';

const repl = require('repl');


const students = [
  'Sondos Abu-Elian',
  'Esra\'a Othman',
  'Ruwaid Alsayyed',
  'Ammar alhariri',
  'Ala\'a almasri',
  'Ammar Badwan',
  'Obada Tumah',
  'Amer Alshen',
  'Fatema Owedah',
  'Abdallah Obaid', 
  'Balqees Qasem', 
  'Ahlam Alafeshat',
  'Anas Zain', 
  'Bushra Bilal',
  'Raghad Quraan',
  'Esra\'a Abdelqader',
];



const used = [];

function get() {
  let randomIndex = Math.floor(Math.random() * Math.floor(students.length));
  while (used.includes(students[randomIndex])) {
    if (used.length === students.length) {
      return 'All Students have been randomly selected :)';
    }
    randomIndex = Math.floor(Math.random() * Math.floor(students.length));
  }
  const student = (students[randomIndex]);
  used.push(student);
  if (student) {
    return student;
  }
  return 'Random student error!';
}



function getPairs() {
  const pool = [...students];
  const results = [];
  let student1, student2;
  while (pool.length) {
    student1 = pool[Math.floor(Math.random() * Math.floor(pool.length))];
    student2 = pool[Math.floor(Math.random() * Math.floor(pool.length))];

    if (student1 !== student2) {
      results.push(`${student1} | ${student2}`);
      pool.splice(pool.indexOf(student1), 1);
      pool.splice(pool.indexOf(student2), 1);
    }
  }
  return results;
}

console.log(
  '***** RANDOM STUDENT functions loaded *****\n',
  'find random students with: `get()`\n',
  'Make random Pairs with `getPairs()',
);
const r = repl.start('> ');
r.context.get = get;
r.context.getPairs = getPairs;
