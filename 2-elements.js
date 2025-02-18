'use strict';
/*
2. Улучшите функцию из предыдущего задания для удаления нескольких элементов из
массива `removeElements(array, item1, ... itemN)`. Например:
```js
const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
// Результат: [2, 3, 4, 7]
```
или
```js
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);
// Результат: ['Beijing', 'Saratov']
```
*/
const removeElements = (array, ...items) => {
  for (const item of items) {
    const itemIndex = array.indexOf(item);
    if (itemIndex !== -1) array.splice(itemIndex, 1);
  }
};

module.exports = { removeElements };
