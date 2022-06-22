//let age = 10
let age_2 = 18
let age_3 = 60

const checkAge = function(age){
    if (age && !isNaN(age)){
if (age < age_2) {
   alert ("You don’t have access cause your age is ” + age_1 + “ It’s less then ")
}
if ((age >= age_2) && (age<age_3)) {
    alert ("Welcome  !")
}

if (age>age_3){
    alert( "Keep calm and look Culture channel")
} else alert ("Technical work")
} else alert('Not an integer value')
}
let a = promt('Enter your age')
checkAge(a)