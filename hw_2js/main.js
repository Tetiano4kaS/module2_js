// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = [10, 20, true, 'neznaju', 0, -129, 'fghjk', false, null, 15];
// console.log(arr)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book = {title: 'bookTitle', pageCount: 256, genre: 'thriller'};
// console.log(book)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.


// let books = {title:'booksTitle', pageCount:155, genre:'horor', authors:[{name:'name', age:22}]}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
// let user = [{name:'olya', username:'username', password:123456},
//     {name:'tolya', username:'poly',password:321533},
//     {name:'alya', username:'aglaya',password:123765},
//     {name:'kalyna', username:'kalynonka',password:765489},
//     {name:'vasya', username:'vasylyovych',password:987653},
//     {name:'kolya', username:'kolyanych',password:123454}]
//
// console.log(user)
// console.log(user[0]['password']);
// console.log(user[1]['password']);
// console.log(user[2]['password']);
// console.log(user[3]['password']);
// console.log(user[4]['password']);
// console.log(user[5]['password'])


//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//     що дорівнює 1, 0, -3

// let x = +prompt('Enter the number')
// let x= 0
// if(x!==0){
//     document.write('Virno')
// }else{document.write('Nevirno')}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 48
// if(time<=0 && time<=15){
//     console.log('First part')
// } else if (time>15 && time<=30){
//     console.log('Second part')
// }else if (time>30 && time<=45){
//     console.log('Third part')
// }else if(time>45 && time<=59){
//     console.log('Fourth part')
// }else{console.log('????')}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = +prompt('Enter day from 1 to 31')
// if(day>0 && day<=10){
//     console.log('First decade')
// }else if(day>10 && day<= 20){
//     console.log('Second decade')
// }else if(day>20 && day<=31){
//     console.log('Third decade')
// }else{console.log('?????')}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let dayOfTheWeek = 10
// switch (dayOfTheWeek){
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     case 7:
//         console.log('Saturday');
//         break;
//     default:
//         console.log('?????')
// }



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a = 8
// let b= 8
//
// if (a>b){
//     console.log(a)
// }else if(a<b){
//     console.log(b)
// }else if (a===b){
//     console.log(`${a} = ${b}`)
// }else {
//     console.log('???')
// }


//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x='asdfgh'
//     if (x===NaN || x===false || x===undefined || x===null){
//         console.log('default')
//     }else{console.log(x)}


//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0].monthDuration>5){
//     console.log(coursesAndDurationArray[0].title, '- Super')
// }
// if (coursesAndDurationArray[1].monthDuration>5){
//     console.log(coursesAndDurationArray[1].title, '- Super')
// }
// if (coursesAndDurationArray[2].monthDuration>5){
//     console.log(coursesAndDurationArray[2].title, '- Super')
// }
// if (coursesAndDurationArray[3].monthDuration>5){
//     console.log(coursesAndDurationArray[3].title, '- Super')
// }
// if (coursesAndDurationArray[4].monthDuration>5){
//     console.log(coursesAndDurationArray[4].title, '- Super')
// }
// if (coursesAndDurationArray[5].monthDuration>5){
//     console.log(coursesAndDurationArray[5].title, '- Super')
// }else {console.log('????')}
