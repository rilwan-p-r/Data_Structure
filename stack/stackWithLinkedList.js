class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Stack{
    constructor(){
        this.top = null
        this.size =0
    }
    push(value){
        let node = new Node(value)
        node.next = this.top;
        this.top = node
        this.size++
    }
    pop(){
        let val
        if(this.isEmpty()){
            return "list is empty"
        }else{  
            val = this.top
            this.top = val.next
        }
        this.size--
        return val.value
    }
    peek(){
        if(this.isEmpty()){
            return "The peek won't perform stack is empty"
        }else{
            return this.top.value
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("The stack is empty");
        }else{
            let stack = ""
            let prev = this.top
            while(prev){
                stack += `${prev.value} `
                prev = prev.next
            }
            console.log(stack);
        }
    }
   isEmpty(){
      return this.size===0
    }
}

let stack = new Stack()
stack.push(7)
stack.push(4)
stack.push(6)
// console.log(stack.pop());
stack.print()