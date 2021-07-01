// filter.spec.js

// 1

var array1 = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]
var element = 4

var r = filter(array1, function(element, i, array) {
    if (array[i].length > element)
    return true
})

console.assert(r instanceof Array)
console.assert(r.length === 3)
console.assert(r[0] === 'goats')
console.assert(r[1] === 'sheep')
console.assert(r[2] === 'chickens')
console.assert(r != array1)

// 2

var array1 = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]
var element = 5

var r = filter(array1, function(element, i, array) {
    if (array[i].length > element)
    return true
})

console.assert(r instanceof Array)
console.assert(r.length === 1)
console.assert(r[0] === 'chickens')
console.assert(r != array1)

// 3

var array1 = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]
var element = 10

var r = filter(array1, function(element, i, array) {
    if (array[i].length > element)
    return true
})

console.assert(r instanceof Array)
console.assert(r.length === 0)
console.assert(r != array1)

// 4

var array1 = ["pigs", "goats", "sheep", "chickens", "cats", "dogs"]
var element = 0

var r = filter(array1, function(element, i, array) {
    if (array[i].length > element)
    return true
})

console.assert(r instanceof Array)
console.assert(r.length === 6)
console.assert(r[0] === 'pigs')
console.assert(r[1] === 'goats')
console.assert(r[2] === 'sheep')
console.assert(r[3] === 'chickens')
console.assert(r[4] === 'cats')
console.assert(r[5] === 'dogs')
console.assert(r != array1)