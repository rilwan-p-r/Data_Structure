class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(values){
        this.items[this.rear] = values
        this.rear++
    }
    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        let val = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return val
    }
    peek(){
        return this.items[this.front]
    }
    isEmpty(){
        return this.rear - this.front === 0
    }
    getSize(){
        return this.rear - this.front
    }
    print(){
        console.log(this.items);
    }

}
let queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.print()
console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.dequeue());
