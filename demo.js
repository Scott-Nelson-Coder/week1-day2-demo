// console.log("Hello World")

// let thing = "Red Ball"
// console.log(thing)

// this is a comment 

// const newThing = 10
// console.log(newThing)

// const firstName = "Scott"
// let age = 5
// let isCool = true

// console.log(`Name: ${firstName}. Age: ${age} `)

// // if(isCool === true) {
// //     console.log("This person is SICK!!!")
// // } else {
// //     console.log("haha maybe not")
// // }

// if(isCool && age > 17) {
//     console.log("This person is a cool adault")
// } else if (isCool){
//         console.log("This person is cool and young")
// } else {
//     console.log("They arn't cool!")
// }

// let a = 17
// let b = 5
// let c = 2
// let x = 20

// let answer = a + (c * b)
// console.log(answer)

const readline = require('readline')

const reader = readline.createInterface({ input: process.stdin, output: process.stdout }) // not important to know HOW this works at the moment // We can know ask a question 

// reader.question("What is your favorite color?", function(response){
//     console.log(`${response} is a good color` )
// })

reader.question("Let me guess a number, pick a number from one to ten", function (num) {
    if (num >= 1 && num <= 10) {
        console.log(`Hmmm... I think you nunber was ${num}`)
    } else {
        console.log("Hey! I SAID BETWEEN 1 AND 10!")
    }
})



