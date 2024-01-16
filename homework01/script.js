// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
console.log("math.min: " + Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
const createCounter = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
};
const counter = createCounter();
console.log("count++: " + counter.increment());
console.log("count: " + counter.getCount());
console.log("count--: " + counter.decrement());

// 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
const factorial = (number) => {
  if (number <= 1) return 1;
  return factorial(number - 1) * number;
};
console.log("!5 = " + factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log("!0 = " + factorial(0)); // выводит 1 (по определению факториала)
