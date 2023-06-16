// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let s = (a,b)=>a*b;
// console.log(s(2,4))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circleS = (r) => (3.14 * r ^ 2);
// console.log(circleS(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let s=(h,r)=>(2*3.14*(h+r));
// console.log(s(2,3))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array=[1,2,3,4,5,'fghj', 67, 'dfghjk'];
//
// let arr =(array)=>{
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }};
// arr(array)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let someText = (someText)=> `${someText}`
// console.log(someText('Buon giorno!'))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let createList= (someText, number)=> {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${someText}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createList('chiao',2)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array1= [1, 45,'dfghjkl', 7654, 'fghjklkjhgfds']
//
// let createList = (array)=>{
//     for (const arrayElement of array) {
//         document.write(`<ul>`)
//         document.write(`<li>${arrayElement}</li>`)
//         document.write(`</ul>`)
//     }
// }
// createList(array1)

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
// let userBuilder= (users)=>{
//     for (const user of users) {
//         document.write(`${user.id} - ${user.name} - ${user.age}; `)
//     }
// }
// userBuilder(users)

// - створити функцію яка повертає найменьше число з масиву
// const arrayOfNumbers = [1, 2, 10];
//
// let minNum = (array) => {
//     let number = array[0];
//     for (const numberElement of array) {
//         if (number > numberElement) {
//             number = numberElement
//         }
//         return number
//     }
// }
// console.log(minNum(arrayOfNumbers))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
//
// let sumElem= (array)=>{
//     let number = 0;
//     for (let item of array){
//         number+=item;
//     }
//     return number;
// }
// console.log(sumElem([1,2,10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap=(array,index1,index2)=>{
//     let num1=array[index1];
//     let num2=array[index2];
//     array[index1]=num2;
//     array[index2]=num1
//     return array
// }
//
// console.log(swap([11,22,33,44],0,1))


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (let item of currencyValues) {
//         if (exchangeCurrency == item.currency) {
//             result = sumUAH / item.value
//         }
//     }
// return result;
// }
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))

// / - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr= (array)=>{
//     for (const num of array) {
//         if(!num){array.end.push(num)}
//     }
//     return array
// }
// console.log(arr([0,1,2,3,4]))