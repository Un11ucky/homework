const userName = 'Unlucky'
const age = 26
const isStudent = true
let favoriteColor 
const phone = null
const address = {
    city: 'Kaliningrad',
    country: 'Russia'
}
// console.log(userName, age, isStudent, favoriteColor, phone, address)
// console.log(
//     typeof userName,
//     typeof age,
//     typeof isStudent,
//     typeof favoriteColor,
//     typeof phone,
//     typeof address
// )
console.log('userName', typeof userName, userName)
console.log('age', typeof age, age)
console.log('isStudent', typeof isStudent, isStudent)
console.log('favoriteColor', typeof favoriteColor, favoriteColor)
console.log('phone', typeof phone, phone)
console.log('address', typeof address, address)

function capitalize(string) {
    const unified= string.trim().toLowerCase()
    return unified[0].toUpperCase() + unified.slice(1)
}
let userName2 = '   aNNa   '

let age2 = '19'
const num = Number(age2)
const ag = age2

let city2 = 'berlin'

let isStudent2 = true
let hobby2
let pet2 = null

console.log(`
    Имя: ${capitalize(userName2)}
    Возраст: ${num}
    Через 5 лет: ${num + 5}
    Город: ${capitalize(city2)}
    Студент: ${isStudent2}
    Хобби: ${hobby2}
    Питомец: ${pet2}
`)

let phrase = 'javascript is cool'
console.log(phrase[0].toUpperCase() + phrase.slice(1), phrase.length, phrase.slice(0, 10), phrase.includes('cool')  )


let firstName5 = 'ivan'
let lastName5 = 'petrov'
let age5 = '21'
const num5 = Number(age5)
let country5 = 'germany'

console.log(`
    Имя: ${capitalize(firstName5) + ' ' + capitalize(lastName5)}
    Возраст: ${num5}
    Через год: ${num5 + 1} 
    Страна: ${capitalize(country5)}   
`)


let age6 = 18
let score6 = 75
let passwordLength6 = 6
console.log (age6 > 18, age6 === 18, score6 > 50, passwordLength6 !== 8)


let age7 = 20
let hasTicket7 = true
let hasPassport7 = false
console.log(age7 >= 18 && hasTicket7, hasTicket7 && hasPassport7, !hasPassport7)

let age8 = 17
if (age8 >=18) console.log('Доступ разрешён')
else console.log('Доступ запрещён')

console.log(age8 >=18 ? 'Доступ разрешён':'Доступ запрещён')   
console.log(age8 >=18 && 'Доступ разрешён') 
console.log(age8 >=18 ?? 'Доступ разрешён')

let first = {}
console.log(!!'', !![].length, !!Object.keys(first).length, !!'ыыы', !!0, !!-1, !!1);


let login9 = '   Admin   '
if ( login9.trim().toLowerCase() === 'admin') console.log('Привет, админ')
else console.log('Пользователь не найден')


let userName10 = '   max   '
const Name10 = capitalize(userName10)
let age10 = '16'
const agee10 = Number(age10)
let isStudent10 = true
console.log(agee10 >=18 ? `${Name10}, доступ разрешён`:`${Name10}, партия тобой недовольна`)
isStudent === true && console.log('Ты студент')
