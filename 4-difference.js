'use strict';
/*
4. Функция `difference(array1, array2)` должна находить разницу между
массивами, т.е. возвращать новый массив, содержащий значения, которые
содержались в `array1`, но не содержались в `array2`. Примеры вызова:
```js
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Результат: [7, -2, 5]
```
```js
const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const result = difference(array1, array2);
console.log(result);
// Результат: ['Beijing']
```
*/
const difference = (array1, array2) => {
  const newArray = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = { difference };
