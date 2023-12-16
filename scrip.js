console.log('JS OK')
// 1 
const element = document.getElementById('password')
console.log('element: ', element)
// 2 
const name = prompt('Come ti chiami?')
console.log('name: ', name)
// 3
const lastname = prompt('Qual\'è il tuo cognome')
console.log('lastname: ', lastname)
// 4
const color = prompt('Qual\'è il tuo colore preferito?')
console.log('color: ', color)
// 5
const fixedNumber = 23
console.log('fixedNumber: ', fixedNumber)
// 6
let message = 'La tua password è: '
console.log('message: ', message)
// 7
const finalText = '<strong>' + message + '</strong>' + name + lastname + color + fixedNumber;
console.log('finalText: ', finalText)
// 8
element.innerHTML = finalText