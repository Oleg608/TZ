let testData = [
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
];
/*
тернарним выражением проверяем существует ли искомый элемент
и методом slice возвращаем массив после искомого значения 
в случае если такого элемента нет , возвращяем пустой массив
*/
function array_skip_until(array, value) {
  return array.slice(
    array.indexOf(value) === -1 ? array.length + 1 : array.indexOf(value)
  );
}

console.log(array_skip_until(testData, "85"));
console.log(array_skip_until(testData, " "));
console.log(array_skip_until(testData, true)); 
