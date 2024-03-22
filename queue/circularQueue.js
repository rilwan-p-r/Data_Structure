class circularQueue{
    constructor(capacity){
        this.item = new Array(capacity)
        this.capacity = capacity
        this.rear = -1
        this.front = -1
        this.currentLength = 0
    }

    isEmpty(){
        return this.currentLength === 0
    }

    isFull(){
        return this.currentLength === this.capacity
    }
    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.item[this.rear] = value
            this.currentLength +=1
            if(this.front === -1){
                this.front = this.rear
            }
        }else{
            console.log("queue is full");
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        let deq = this.item[this.front]
        this.item[this.front] = null
        this.front= (this.front + 1) % this.capacity
        this.currentLength -= 1 
        if(this.isEmpty()){
            this.rear = -1
            this.front = -1
        }
        return deq
    }
    peek(){
        if(!this.isEmpty()){
            return this.item[this.front]
        }
        return null
       
    }
    getSize(){
        return this.currentLength
    }
    print(){
        if(this.isEmpty()){
            console.log('queue is empty');
        }else{
            let i
            let str = ''
            for(i=this.front; i!==this.rear; i = (i+1)%this.capacity){
                str += this.item[i] + ' '
            }
            str += this.item[i]
            console.log(str);
        }   
    }

}
let circularqueue = new circularQueue(5)

console.log(circularqueue.isEmpty());
console.log(circularqueue.getSize());
circularqueue.enqueue(5)
circularqueue.enqueue(6)
circularqueue.enqueue(7)
circularqueue.enqueue(8)
circularqueue.enqueue(9)
circularqueue.print()
circularqueue.enqueue(10)
console.log(circularqueue.isEmpty());
console.log(circularqueue.getSize());
console.log(circularqueue.dequeue());
circularqueue.enqueue(11)
circularqueue.print()
