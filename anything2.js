for (let i = 0; i <=20; i++) {
    if (i % 2 === 0)
    console.log(i);
}

let i = 1;

do {
    console.log(i);
    i++
} while (i<=3);

grades = [100, 67, 41, 69]

for (let i = 0; i < grades.length; i++) {
    console.log(grades[i])
}

for (let grade of grades) {
    console.log(grade)
}

grades.forEach(print_grade)
function print_grade(grade) {
    console.log(grade)
}