// (()=>{
//     let x=y=10;
// })();
// console.log(typeof x);
// console.log(typeof y);

// function Car() {
//   this.make = 'Lamborghini';
//   return { make: 'Maserati' };
// }

// const myCar = new Car();
// console.log(myCar.make);

// function greeting() {
//   throw 'Hello world!';
// }

// function sayHi() {
//   try {
//     const data = greeting();
//     console.log('It worked!', data);
//   } catch (e) {
//     console.log('Oh no an error:', e);
//   }
// }

// sayHi();

// function getInfo(member, year) {
//   member.name = 'Lydia';
//   year = '1998';
// }

// const person = { name: 'Sarah' };
// const birthYear = '1997';

// getInfo(person, birthYear);

// console.log(person, birthYear);


[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});

function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
