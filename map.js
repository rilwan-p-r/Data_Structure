let map = new Map([['name','rony'],['country','england']])
map.set("age",44)
console.log(map.has("country"));
map.clear()
console.log(map);
for(const [key,value] of map){
    console.log(`${key}:${value}`);
}