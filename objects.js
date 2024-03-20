let person = {
    name:"rilwan",
    place:'padoor',
    age:22,
    salary:70000,
    salary2:50000,
    "second-name":"rasheed",
    sayMyname:function(){
        console.log(this.name+" "+this["second-name"]);
    }
}
let value = person.age
console.log(value);
let value1 =person['place']
console.log(value1);
let sum = person['salary']
let sum1 = person['salary2']
console.log(sum+sum1);
console.log(person["second-name"]);
person.state = "kerala"
console.log(person['state']);
delete person.salary2
person.sayMyname()
