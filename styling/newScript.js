// function getValueByKeyPath(objAlias, obj);
/* 
getValueByKeyPath('red.big.apple', 
{red:{big:{apple: apple}}}) 
return 'apple'
*/
function getValueByKeyPath(objAlias, obj) {
  const objKeys = objAlias.split(".");
  for (let i = 0; i < objKeys.length; i++) {
    if (obj === undefined) {
      return undefined;
    }
    obj = obj[objKeys[i]];
  }
  return obj;
}

const string = "b.f.g.h.object.red.big.apple";
const object = {
  red: {
    big: {
      apple: "apple",
    },
  },
};
const newObject = {
    a:{
        f: 'asda'
    },
    b: {
        f:{
            g:{
                h:{
                    object
                }
            }
        }
    }
}
getValueByKeyPath(string, newObject)
console.log(getValueByKeyPath(string, newObject));
console.log(newObject);
console.log(newObject);
console.log(newObject);
