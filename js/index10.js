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
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
function array_unique(array) {
  let res = []; 
  for (let elem of array) {//проходим массив и проверяем каждый элемент на повторяемость в массиве result
      //иначе записиваем его в res
    if (!res.includes(elem)) {
      res.push(elem);
    }
  }
  return res;
}
let result = array_unique(testData);
let result2 = array_unique(testData2);
console.log(result, result2);
 
