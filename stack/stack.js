class Stack{
    constructor(){
        this.stack=[]
    }
    push(element){
        this.stack.push(element)
    }
    isEmpty(){
        return this.size() === 0;
    }
    pop(){
        if(this.isEmpty())return "The stack is empty"
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty())return "The stack is  empty peek won't perform"
            return  this.stack[this.size()-1]
    }
    size(){
        return this.stack.length
    }
}
let stack = new Stack()
stack.push(4)
stack.push(7)
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
stack.push(4)
stack.push(5)
console.log(stack.size());