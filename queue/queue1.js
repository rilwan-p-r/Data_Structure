class Queue{
    constructor(){
        this.item = {}
        this.rear = 0
        this.front = 0
    }
    
    enqueue(element){
        this.item[this.rear] = element
        this.rear++

    }
    dequeue(){
        const deletedOne = this.item[this.front]
        delete this.item[this.front]
        this.front++
        return deletedOne
    }
    peek(){
        return this.item[this.front]
    }
    print(){
        console.log(this.item);
    }
    size(){
       return this.rear - this.front
    }
}
let queue = new Queue
queue.enqueue(3)
queue.enqueue(6) 
console.log(queue.peek());
queue.print()
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.enqueue(7)
queue.enqueue(9)
queue.print()
console.log(queue.size());