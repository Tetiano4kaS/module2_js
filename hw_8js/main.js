// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id,name,surname,email,phone) {
//     this.id=id
//     this.name=name
//     this.surname=surname
//     this.email=email
//     this.phone=phone
// }
// let arr=[
//     new User(3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631'),
//     new User(5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555'),
//     new User(2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231'),
//     new User(6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345'),
//     new User(9, 'Dima', 'Trunov', 'dima0@gmail.com', '+380925577776'),
//     new User(4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111'),
//     new User(8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777'),
//     new User(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787'),
//     new User(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231'),
// ]

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filtrId= arr.filter((value) => !(value.id%2))
// console.log(filtrId)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let idSort = arr.sort((a, b) => a.id-b.id)
// console.log(idSort)

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//  constructor(id, name, surname , email, phone, order){
//      this.id=id;
//      this.name=name;
//      this.surname=surname;
//      this.email=email;
//      this.phone=phone;
//      this.order=order;
//  }
// }
// const clients = [
//     new Client(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231', ['apple', 'sandwich', 'malone']),
//     new Client(2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231', ['bear', 'sandwich']),
//     new Client(3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631', ['apple', 'sandwich']),
//     new Client(4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111', ['apple', 'bear', 'sandwich', 'malone']),
//     new Client(5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555', ['bear', 'malone']),
//     new Client(6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345', ['apple', 'bear', 'malone']),
//     new Client(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787', ['apple', 'bear', 'sandwich']),
//     new Client(8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777', ['bear', 'sandwich', 'malone']),
// ];


//
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sortOrder = clients.sort((a,b)=>a.order.length-b.order.length)
//
// console.log(sortOrder)

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drivers = [];
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log(`model-${this.model}, producer-${this.producer}, year-${this.year}, max speed-${this.maxSpeed}, volume-${this.volume}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         newSpeed = this.maxSpeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDrivers = function (name, age) {
//       this.drivers.push(new Driver(name,age))
//     }
// }
// const car = new Car('x6', 'BMW', '2008', 120, 5.2);
// car.info()
// car.addDrivers('vasya',25)
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку