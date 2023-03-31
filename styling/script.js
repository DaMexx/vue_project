// function getValueByKeyPath(objAllias, obj);
/* 
getValueByKeyPath('red.big.apple', 
{red:{big:{apple: apple}}}) 
return 'apple'
*/


function getValueByKeyPath(objAlias, obj) {
  let keys = objAlias.split(".");
  let i = 0;
  let index = keys[0]
  let newObj;
  let res = obj.hasOwnProperty(index)
  keys.array.forEach(element => {
    if (obj.hasOwnProperty(element)){

    }
  });
  console.log(res);
  
//   for(let item in obj){
//     if(obj.hasOwnProperty(item)){
//         for(let t in obj){
//         // return obj.item
//         console.log(obj.item);
//     }
//   }
//   return obj?.keys[i]?.keys[++i]?.keys[++i]
}


// function recourse(text, obj){
//     if (!Array.isArray(text)){
//         console.log(text)
//         text = text.split(".");
//     };
//     text.forEach(element => {
//         if (obj.hasOwnProperty(element)){
//             text.shift()
//             recourse(text, obj)
//         };
//     });
// };


let test = {
  red: {
    big: {
      apple: "apple",
    },
  },
};

console.log(recourse("red.big.apple", test));
