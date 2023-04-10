// function getValueByKeyPath(objAlias, obj);
/* 
getValueByKeyPath('red.big.apple', 
{red:{big:{apple: apple}}}) 
return 'apple'
*/
function getValueByKeyPath(objAlias, obj) {
  // const objKeys = objAlias.split(".");
  // for (let i = 0; i < objKeys.length; i++) {
  //   if (obj === undefined) {
  //     return undefined;
  //   }
  //   obj = obj[objKeys[i]];
  // }
  // return obj;
  let objKeys = [];
  Array.isArray(objAlias)
    ? (objKeys = objAlias)
    : (objKeys = objAlias.split("."));
  console.log(objKeys);
  if (obj === undefined) {
    return undefined;
  }
  if (objKeys.length === 1) {
    return obj.objKeys[0];
  }

  let newObj = objKeys[0];
  let newAlias = objKeys.shift();
  console.log("newAlias", newAlias);
  getValueByKeyPath(newAlias, newObj);
}

let test = {
  red: {
    big: {
      apple: {
        pet: "apple",
      },
    },
  },
};

const string = "b.f.g.h.object.red.big.apple";
// console.log(getValueByKeyPath(string))
const object = {
  red: {
    big: {
      apple: "apple",
    },
  },
};
const newObject = {
  a: {
    f: "asda",
  },
  b: {
    f: {
      g: {
        h: {
          object,
        },
      },
    },
  },
};
console.log(getValueByKeyPath(string, newObject));
