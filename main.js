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

// var greetFullName = `Hello ${fullName} after bday you are ${33 + 1}`

// console.log(greetFullName)

console.log(`Line 1
Line 2
Line 3`)

// carMake = 'Ford';
// carModel = 'F-150';
// carYear = '2015'
// carDesc = 'I drive a ${carYear} ${carMake} ${carModel}'

// console.log(carDesc)

// console.log(typeof fullName)

// console.log(typeof 12.5)

var MyNumber = 23
var myDecimal = 12.5

console.log(5 + 5)
// console.log(myNumber - 3)
// console.log(MyDecimal *2)
// console.log(MyNumber)
// console.log(MyNumber)
// console.log(MyNumber)
// console.log(MyNumber)

// insert screenshots here

// console.log(++myNumber)

console.log(10 % 4)
console.log(11 % 2)

console.log(typeof myNumber)

// var stringNum = myNumber.toString()
// console.log(typeof backToNum, backToNum)

console.log(parseInt('2.9'))
console.log(parseFloat('2.9'))

console.log(3 + '4')
console.log(3. + parseInt('4'))

const bool1 = true

const bool2 = false

console.log(typeof bool1)

console.log(1>2)
console.log(1<2)
console.log( 3 == 3)
console.log(3 == '3')
console.log(1 <= 1)
console.log(!1 == 1)
console.log(1 !== 1)

console.log(Boolean(1), 'bool 1')
console.log(Boolean(0), '0')
console.log(Boolean(-1), '-1')
console.log(Boolean(''),'')
console.log(Boolean('foo'), 'foo')
console.log(Boolean([]),'[]')
console.log(Boolean(null), 'null')
console.log(Boolean(undefined),'undefined')
// console.log(Boolean(Nan), 'Nan')

let willUpdate

willUpdate = 'foo'

console.log(willUpdate)

willUpdate = 0

const noUPdate = 'bar'

noUpdate = 'foo'

console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(false && false)
console.log(false || 0 || false || 1)

function f1(){
  console.log('in f2')
  return false
}

function f2(){
  console.log('in f2')
  return false
}

f1() && f2()

f1() && f1() && f1() && f2() && f1()

let noValue

console.log(noValue)

const placeHolder = null

console.log(placeHolder)

console.log(typeof placeHolder)
console.log(typeof noValue)

console.log(noValue == placeHolder)

// if(true){
//   var blockScope = 'foo'
//   blockScope = 'bar'
//   console.log(blockscope2)

  if(!false){
    let blockScope2 = 'matrix'
    console.log(blockScope2)
  }
// }
if(!false){
  const blockScope3 = 'matrix-const'
  console.log(blockScope3)
}
  const newArray = []

  newArray.push('bob dylan')

  console.log(newArray)

  newArray.push('the beatles')

  console.log(newArray)

  newArray.push('queen', 'j. cole')
  console.log(newArray)

  console.log(newArray.length)

  console.log(newArray[3])

  const studentArray = ['raul','milad','tim','toby']

  studentArray.push('lyla','porter')

  console.log(studentArray)
  const removedStudent = studentArray.pop()
  console.log(removedStudent)
  console.log(studentArray)

  console.log(studentArray.includes('raul'))
  console.log(studentArray.includes('porter'))

  const [student1, student2, student3, ...restOfStudents] = studentArray
  
  console.log[student1, student2, student3] = studentArray
  
  console.log(student1, student2, student3, restOfStudents)

  studentArray.unshift('josh')
  console.log(studentArray)

  console.log(studentArray.shift())
  // console.log(StudentArray)

  console.log(studentArray.indexOf('tim'))
  
  console.log(studentArray.toString())

  console.log(studentArray.join(', '))

  console.log(studentArray.slice(0,3))

  console.log(studentArray.splice(2,2,'heather','mel'))

  // console.log(studentArray.)

  // make an array of your fav foods
  // use a method to add 'fried tarantulas' at the end
  // use another method 

  console.log(adder(1,1))

 function adder(num1, num2){
    return num1 + num2
 }

  const arrowFunc = () => {
  return 'Matrix Arrow Func'
}
 const arrowFunc2 = () => 'Matrix Arrow Func'

 console.log(arrowFunc2(), 'arrow Function 2')
 const result = adder(10,8)

 console.log(result)

 //create a function and an arrow function.
 // to print full name

// function full_Name(firstName, lastName) {
//   return firstName + ' ' + lastName;
// }
// const name = full_Name('Toby','Markham');

// console.log(fullName);

const full_Name = (firstName, lastName) => firstName + ' ' + lastName;

const name2 = full_Name('Jody','Bowden');

console.log(name2)

//control flows
// if (boolean expression) {} else {}

if ( 2 > 1 ) {
  console.log("2 > 1")
}

if ( 2 < 1 ) {
  console.log("2 > 1")
} else {
  console.log('Was false')
}

//? <action> : <else action> not going to do this way

2 > 1 ? console.log('2 > 1') : console.log('is false')

// for (let <loop variable; <boundary iterable.length>; <increment>){}

console.log(studentArray)

for(let i; studentArray.length; i++){
  console.log(i, studentArray[i])
}

for (let num = 0; num < 30; num += 2){
  console.log(num)
}

/*  Notes for homework.  problem one modified
  do in python as well? extra credit.
  for 3, three codes wars problems...really!  in javascript
  
*/