function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
  if (Math.random() < 0.5) return a * b;
  else throw new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {
  try {//с помощью конструкции try-catch отлавлтваем ошибки и вызываем функцию пока не получим результат
    x = primitiveMultiply(a, b);
  } catch (e) {
    return primitiveMultiply(a, b);
  }
}
console.log(reliableMultiply(8, 8));
 
