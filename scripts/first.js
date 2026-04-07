console.log('hello world')
// константа массива
const bruh = ['hi']

for (let index = 0; index < 5; index++) {
    bruh.push(index)
}
// console.log(bruh)
// константа Объекта
const rar = {
    zip: 'stroka'
}
// console.log(rar.zip)
const rar2 = {
    zip: 'stroka'
}
// console.log(rar===rar2)

function sameObject(objectA, objectB) {
    let isEqual = false
    for (const key in objectA) {
        console.log(key)
        if (!Object.hasOwn(objectB, key)) {
            break
        }

        if (objectA[key] === objectB[key]) {
            isEqual = true
        }

        else {
            break
        }
    }
    return isEqual
}
console.log(sameObject(rar, rar2))

function sameObject2(objectA, objectB) {
    let isEqual = false
    for (const key in objectA) {
        if (!Object.hasOwn(objectB, key))
            break
        const element = objectB[key]
        if (typeof element === 'object') {
            const res = sameObject2(element, objectA[key])
            if (!res)
                break
        }
        if (objectA[key] === objectB[key])
            isEqual = true
        else
            break
    }
    return isEqual
}
console.log(sameObject2(rar, rar2))

function concat(...args) {
    const strings = []
    for (const value of args) {
        if (typeof value === 'string')
            strings.push(value)
    }
    return strings.join(' ')

}
console.log(concat(1,'tata',[],{},'haha',()=>1,'asdasd',5213231,{},));
// {} - объект
// '' - строка
// [] - массив
// () => {} - стрелочная ПУСТАЯ функция 
// () => '' - стрелочная функция которая возвращает строку
function concat2(...args) {
    let strings = ''
    for (const value of args) {
        if (typeof value === 'string')
           strings += '-' + value
    }
    return strings.slice(0, -1)

}
console.log(concat2(1,'dada',[],{},'haha',()=>1,'asdasd',5213231,{},));

const str = 'test' // ['t', 'e', 's', 't']