// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let string1 = 'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
//
// console.log(string1.length);
// console.log(string2.length);
// console.log(string3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let string1 = 'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
//
// let str1toUpperCase= string1.toUpperCase();
// console.log(str1toUpperCase);
//
// let str2toUpperCase=string2.toUpperCase();
// console.log(str2toUpperCase);
//
// let str3toUpperCase= string3.toUpperCase();
// console.log(str3toUpperCase);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1='HELLO WORLD';
// let str2='LOREM IPSUM';
// let str3='JAVASCRIPT IS COOL';
//
// console.log(str1.toLowerCase())
// console.log(str2.toLowerCase())
// console.log(str3.toLowerCase())
//


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string  '
// let strSlice= str.trim()
// console.log(strSlice)

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr)
//
// ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let ar = [10,8,-7,55,987,-1011,0,1050,0];
// let mapArtoStr= ar.map(value => value.toString())
// console.log(mapArtoStr)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
//
// let sortNums = (nums, direction) => {
//     if (direction === 'ascending') {
//         return nums.sort((a, b) => a - b)
//     }else (direction === 'descending')
//         return nums.sort((a, b)=>b-a)
//
// }
// console.log(sortNums(nums,'ascending'))

// sortNums(nums, 'ascending') // [3,11,21]
// sortNums(nums, 'descending') // [21,11,3]


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let monthDurationDesc= coursesAndDurationArray.sort((a, b) =>b.monthDuration-a.monthDuration);
// console.log(monthDurationDesc)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let courceMoreThan5Month= coursesAndDurationArray.filter(value => value.monthDuration>5)
// console.log(courceMoreThan5Month)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let courseArr= coursesAndDurationArray.map((value, index, array)=>{
//     return{
//         id:index, ...value}
// })
// console.log(courseArr)

//
// let cards = [
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
// ];



// - знайти піковий туз
// - всі шістки
// let findValue6= cards.filter(value => value.value==='6')
// console.log(findValue6)
// - всі червоні карти
// let findRed= cards.filter(value => value.color==='red');
// console.log(findRed)
// - всі буби
// - всі трефи від 9 та більше
// let findFrom9=cards.filter(value=>['9', '10', 'ace', 'jack', 'queen', 'king'].includes(value.value)&& value.cardSuit==='clubs')
// console.log(findFrom9)

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

//
// let reduceCards = cards.reduce((accumulator, cards) => {
// switch (cards.cardSuit){
//     case 'spade':
//         accumulator.spades.push(cards);
//         break;
//     case 'diamond':
//         accumulator.diamonds.push(cards);
//         break;
//     case 'heart':
//         accumulator.hearts.push(cards);
//         break;
//     case 'clubs':
//         accumulator.clubs.push(cards);
//         break;
//
// } return accumulator;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// })
// console.log(reduceCards)

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// --написати пошук всіх об'єктів, в який в modules є sass
//
// let findSass= coursesArray.filter(value => value.modules.includes('sass'))
// console.log(findSass)

// --написати пошук всіх об'єктів, в який в modules є docker
// let findDocker = coursesArray.filter(value => value.modules.includes('docker'))
// console.log(findDocker)

//
// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let sortNums=(nums, direction)=>{
//     switch (direction) {
//         case 'ascending':
//             nums.sort((a,b)=>a-b)
//             break;
//         case 'descending':
//             nums.sort((a,b)=>b-a)
//             break;
//     }
//     return nums;
// }
//
// console.log(sortNums(nums,'ascending'))