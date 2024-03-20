// let set = new Set([2,5,4,6])
// set.add(8)
// set.delete(5)

// console.log(set.has(1));
// set.clear()

// for(const value of set){
//     console.log(value);
// }

let arr = [4,3,2,1,1]

let set = new Set(arr)

for(const item of set){
    console.log(item);
}
console.log("\n");
for(const values of arr){
    console.log(values);
}
console.log("\n");
console.log(set.size);