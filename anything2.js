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
arr = grades
grades[0] = 1000
console.log(arr[0])

grades.push("kangkong")
grades.unshift("mangga")

var popped = grades.pop()
var shifted = grades.shift()

console.log(grades)
console.log(popped, shifted)

