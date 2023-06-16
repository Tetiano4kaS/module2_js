// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//  function s(a,b){
//     return a*b;
// };
// console.log(s(2,3))
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleS(r){
//     return 3.14 * r^2
// }
// console.log(circleS(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function  cylindrS(h,r){
//     return 2*3.14*(h+r)
// }
//
// console.log(cylindrS(2,3))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array=[1,2,3,4,5,'fghj', 67, 'dfghjk']
// function ar(array){
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
// ar(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text(someText,tag){
//     document.write(`<${tag}>${someText}</${tag}>`)
// }
// text('bella ciao', 'h1')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(someText) {
//     document.write(`<ul>`)
//     document.write(`<li>${someText}</li>`)
//     document.write(`<li>${someText}</li>`)
//     document.write(`<li>${someText}</li>`)
//     document.write(`</ul>`)
// }
// list('Ti amo')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(someText, nubmer) {
//     document.write(`<ul>`)
//     for (let i = 0; i < nubmer; i++) {
//         document.write(`<li>${someText}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// list('Andiamo avanti', 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array1= [1, 45,'dfghjkl', 7654, 'fghjklkjhgfds']
// function listLi(arr){
//     document.write(`<ul>`)
//     for (let item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// listLi(array1)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28},
//     {id: 5, name: 'max', age: 30},
//     {id: 6, name: 'anya', age: 31},
//     {id: 7, name: 'oleg', age: 28},
//     {id: 8, name: 'andrey', age: 29},
//     {id: 9, name: 'masha', age: 30},
//     {id: 10, name: 'olya', age: 31},
//     {id: 11, name: 'max', age: 31}
// ];
// function buildUserArr(arr){
//     for (let item of arr){
//         document.write(`<div>Id: ${item.id}, Name: ${item.name}, Age: ${item.age}</div>`)
//     }
// }
//
// buildUserArr(users)

// - створити функцію яка повертає найменьше число з масиву

// const arrayOfNumbers = [1, 2, 10];
//
// function minNum(arr){
//     let number=arr[0]
//     for (let item of arr){
//         if (number>item){
//             number=item
//         }
//     }
//     return number
// }
//
// document.write(minNum(arrayOfNumbers))


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// function sum(arr){
//     let number = 0;
//     for (let item of arr){
//         number+=item
//     }
//     return number
// }
// document.write(sum(arrayOfNumbers))


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let ar = [11, 22, 33, 44];
//
// function swap(arr,index1,index2){
//     const num1=arr[index1];
//     const num2=arr[index2];
//     arr[index2]=num1
//     arr[index1]=num2
//     return arr
// }
// console.log(swap(ar,0,1))


// function swap2(arr,index1,index2){
//     [arr[index1],arr[index2]]=[arr[index2],arr[index1]]
//     return arr
// }
// console.log(swap2(ar,0,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             return sumUAH / item.value
//         }
//     }
// }
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))