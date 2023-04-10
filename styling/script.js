// function getValueByKeyPath(objAllias, obj);
/* 
getValueByKeyPath('red.big.apple', 
{red:{big:{apple: apple}}}) 
return 'apple'
*/

function getValueByKeyPath(objAlias, obj) {
  let keys = objAlias.split(".");
  let i = 0;
  let index = keys[0];
  let newObj;
  let res = obj.hasOwnProperty(index);
  keys.array.forEach((element) => {
    if (obj.hasOwnProperty(element)) {
    }
  });
  console.log(res);

  //   for(let item in obj){
  //     if(obj.hasOwnProperty(item)){
  //         for(let t in obj){
  //         // return obj.item
  //         console.log(obj.item);
  //     }
  //   }
  //   return obj?.keys[i]?.keys[++i]?.keys[++i]
}

// function recourse(text, obj){
//     if (!Array.isArray(text)){
//         console.log(text)
//         text = text.split(".");
//     };
//     text.forEach(element => {
//         if (obj.hasOwnProperty(element)){
//             text.shift()
//             recourse(text, obj)
//         };
//     });
// };

let test = {
  red: {
    big: {
      apple: "apple",
    },
  },
};

console.log(recourse("red.big.apple", test));

function createStack() {
  const items = [];

  const kek = 23;
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      // return items.pop();
      console.log(items.pop());
    },
    show() {
      console.log(items);
      console.log(kek);
    },
  };
}

const stack = createStack();
const gomno = createStack();
stack.push(10);
stack.push(5);
stack.push(23);
stack.push(41);
stack.push(31231);
stack.pop(); // => 5

console.log(stack.items); // => undefined

stack.show();

gomno.show();

function multiply(num1, num2) {
  let first = num1;
  let second = num2;

  return {
    multiOne() {
      first * first;
    },
    multiple() {
      first * second;
    },
  };
}

const mem = multiply(9);
console.log(mem);

function multiply(number1, number2) {
  if (number2 !== undefined) {
    // return number1 * number2;
    console.log(number1 * number2);
  }
  return function doMultiply(number2) {
    console.log(number1 * number2);
    // return number1 * number2;
  };
}

multiply(4, 5); // => 20
multiply(3, 3); // => 9

const double = multiply(2);
double(5); // => 10
double(11); // => 22

const sum = function (a) {
  return function aaasdas(b) {
    console.log(a + b);
  };
};

sum(2)(4);
sum(4)(8);
sum(2)(123);
sum(411)(6);

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () {
      // shooter function
      console.log(i); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...

function closure() {
  let name = "John";
  let age = 54;
  let sex = "male";
  const CURRENT_YEAR = new Date().getFullYear();

  const calculateBirthYear = function (currentYear, personAge) {
    currentYear = CURRENT_YEAR;
    personAge = age;
    return currentYear - personAge;
  };
  const BORN_YEAR = calculateBirthYear();

  return {
    changeName(newName) {
      name = newName;
    },
    sumName() {
      return `${name} was born in ${BORN_YEAR} and ${sex}`;
    },
  };
}

const John = closure();
John.changeName("Alex");
console.log(John.sumName());
