let arr = [[{a: {price: 20}}, {a: {price: 35}}, {a: {price: 44}}]];
let total = 0;

for (let i = 0; i < arr.length; i++) {
  let innerArr = arr[i];
  for (let j = 0; j < innerArr.length; j++) {
    let obj = innerArr[j];
    let price = obj.a.price;
    total += price;
  }
}

console.log(total); 
