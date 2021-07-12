var arr = ["Solnce", "vishlo", "iz", "za", "tuchi"];
function recuseLog(array) {
  if (!array.length) {
    return array[array.lenght];
  } else {
    console.log(array.shift());
    return recuseLog(array);
  }
}

recuseLog(arr); 
