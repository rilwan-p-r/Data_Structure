class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index = this.hash(key)
        // this.table[index] = value
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKey = bucket.find(item=>item[0]===key)
            if(sameKey){
                sameKey[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if(bucket){
            let sameKey = bucket.find(item=>item[0]===key)
            if(sameKey){
                return sameKey[1]
            }
        }
    }
    remove(key){
        let index = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if(bucket){
            let sameKeyArray = bucket.find(item=>item[0]===key)//[[k,v],[]]
            console.log('kkk',sameKeyArray);
            if(sameKeyArray ){
                bucket.splice(bucket.indexOf(sameKeyArray),1)
            }
        }
    }
    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            } 
        }
    }
}
let table = new hashTable(50)
table.set('name','rilwan')
table.set('age',22)
table.display()
console.log(table.get("name"));
table.remove("name")
console.log(table.get("name"));
table.set('aeg',23)
table.set('name','rilwan')
table.set("mane","shamis")

table.display()
console.log(table.get('mane'));

