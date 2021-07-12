let building = {
  type: "house",
  floors: 2,
  owner: "owner1",
};

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}
let deepClone = cloneDeep(building);
deepClone.owner = "no owner";
console.log(building);
console.log(deepClone);

//требуеться подключение lodash в npm
/*
let clone = _.cloneDeep(building);
deepClone.owner = "no owner";
console.log(building);
console.log(clone);
*/ 
