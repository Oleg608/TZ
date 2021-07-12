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

function array_find(arr, wanted) {
  return arr.filter(
    (
      el //метод filter создает новый массив из элементов которые получают callback true
    ) =>
      wanted instanceof RegExp ? wanted.test(el) : new RegExp(wanted).test(el)
  ); //с помощью instanceof проверяем являеться ли wanted регулярным выражением и делаем проверку
  //иначе делаем wanted регулярным выражением
}

console.log(array_find(testData, 1990));
console.log(array_find(testData, "[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+")); //может выводить массив подходящих значений как в случае с email
console.log(array_find(testData, /^Raf.*/i));
 
