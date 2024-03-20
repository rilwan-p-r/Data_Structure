class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{        
            node.next = this.head;
            this.head  = node
        }

        this.size++
    }
    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node

        }
    }
    isEmpty(){
        return this.size===0
    }
    print(){
        if(this.isEmpty()){
            console.log("The list is empty");
        }else{
            let prev = this.head
            let list = ""
            while(prev){
                list += `${prev.value} `
                prev = prev.next
            }
            console.log(list);
        }
       
        
    }

}
let list = new linkedList()
list.prepend(4)
list.prepend(8)
list.print()
list.append(9)
list.print()