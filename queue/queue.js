class Queue{
    constructor(){
        this.item=[]
    }
    
    enqueue(value){
        this.item.push(value)
    }
    dequeue(){
        return this.item.shift()
    }
    peek(){
        return this.item[0]
    }
    isEmpty(){
        return this.item.length===0
    }
    getSize(){
        return this.item.length
    }
    print(){
        console.log(this.item.toString());
    }
}
let queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue(5)
console.log(queue.dequeue());
queue.enqueue(4)
queue.enqueue(7)
queue.print()
console.log(queue.isEmpty());
console.log(queue.getSize());