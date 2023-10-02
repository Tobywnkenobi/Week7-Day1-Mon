console.log('Matrix Hello JavaScript')

// syntax for comments

/* 
  Multi
  Line
  Comment
*/

var firstName = 'dylan';

console.log(firstName)

var lastName 
lastName = 'smith'

console.log(lastName)

console.log(firstName); console.log(lastName); var fullName = 'sean currie'

//  STRINGS 

console.log('my first string in quotes')

var myString = 'abc123'
var string1 = 'foo'
var string2 = "bar"
var string3 = 'i can\'t compile'

fullName = 'dylan' + 'smith'
console.log(fullName)
fullName = 'dylan' + ' ' + 'smith'
console.log(fullName)
fullName = firstName + lastName
console.log(fullName)

console.log(fullName[0])
//  can't index negatives to go to end 
console.log(fullName[-1])
// out of range, no but, just undefined
console.log(fullName[100])

console.log(fullName[fullName.length - 1])

// string methods

console.log(fullName.toUpperCase())

fullName = fullName.toUpperCase()

console.log(fullName)
console.log(fullName.toLowerCase())

console.log(fullName.length)

console.log(fullName.slice(0,5))
console.log(fullName.slice(-5,-1))


console.log(fullName.substring(0,5))

// 'hereinbefore' => 'in'

fullName = fullName.replace('SMITH', 'CURRIE')

console.log(fullName)

// template literals

var greetFullName = `Hello ${fullName} after bday you are ${33 + 1}`

console.log(greetFullName)

console.log(`Line 1
Line 2
Line 3`)

carMake = 'Ford';
carModel = 'F-150';
carYear = '2015'
carDesc = 'I drive a ${carYear} ${carMake} ${carModel}'

console.log(carDesc)

console.log(typeof fullName)

console.log(typeof 12.5)

var MyNumber = 23
var myDecimal = 12.5

console.log(5 + 5)
console.log(myNumber - 3)
// console.log(MyDecimal *2)
// console.log(MyNumber)
// console.log(MyNumber)
// console.log(MyNumber)
// console.log(MyNumber)

// insert screenshots here

console.log(++myNumber)

console.log(10 % 4)
console.log(11 % 2)\

console.log(typeof myNumber)

var stringNum = myNumber.toString()
console.log(typeof backToNum, backToNum)

console.log(parseInt('2.9'))
console.log(parseFloat('2.9'))