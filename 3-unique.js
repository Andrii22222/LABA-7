'use strict';
/*
3. Функция `unique(array)` должна возвращать новый массив, не содержащий
дубликатов. Примеры вызова:
```js
const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Результат: [2, 1, 3]
```
```js
const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);
// Результат: ['top', 'bottom', 'left']
```
*/
// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const newArray = [];
  for (const item of array) {
    if (newArray.indexOf(item) === -1) {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = { unique };
