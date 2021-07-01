// map.spec.js

// 1

var array1 = [1, 5, 10, 20]
var element = 6

var r = map(array1, function(element, index, array) {
    console.log(element, index, array)
})

console.assert(r instanceof Array)
console.assert(r .length === array1.length)
console.assert(r[0] === 6)
console.assert(r[1] === 30)
console.assert(r[2] === 60)
console.assert(r[3] === 120)

// 2

var array1 = [1, 5, 10, 20]
var element = -1

var r = map(array1, function(element, index, array) {
    console.log(element, index, array)
})

console.assert(r instanceof Array)
console.assert(r .length === array1.length)
console.assert(r[0] === -1)
console.assert(r[1] === -5)
console.assert(r[2] === -10)
console.assert(r[3] === -20)