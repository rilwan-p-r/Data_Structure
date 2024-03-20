class Queue{
    constructor(){
        this.item = []
    }

    enqueue(value){
        this.item.push(value)
    }
    dequeue(){
        this.item.shift()
    }
    peek(){
        if(!this.isEmpty()){
         return this.item[0]
        }
        return null

    }
    isEmpty(){
    return this.item.length===0
    }
    
    print(){
        console.log(this.item.toString());
    }
    size(){
        return this.item.length
    }
}
let queue = new Queue
console.log(queue.isEmpty());
queue.enqueue(3)
queue.enqueue(6)
queue.dequeue()
queue.enqueue(7)
console.log(queue.peek());
queue.print()
console.log(queue.size());
