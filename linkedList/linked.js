class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    // prepend(value){
    //     let node = new Node(value)
    //     if(this.isEmpty()){
    //         this.head = node
    //     }else{
    //         node.next = this.head
    //         this.head = node
    //     }
    //     this.size++
    // }
    // append(value){
    //     let node = new Node(value)
    //     if(this.isEmpty()){
    //         this.head = node
    //     }else{
    //         let prev = this.head
    //         while(prev.next){
    //             prev = prev.next
    //         }
    //         prev.next = node
    //     }
    //     this.size++
    // }

    print(){
        if(this.isEmpty()){
            console.log("list  is empty");
        }else{
            let curr = this.head
            let list = ""
            while(curr){
                list += `${curr.value} `
                curr = curr.next
            }
            console.log(list);
        }
        
    }

    // tail implementation
    prependT(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
        
    }
    appendT(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node

        }
        this.size++
    }
    insert(index,value){
        let  node = new Node(value)
        if(index<0 || index>this.size){
            return
        }
        if(index===0){
            this.prependT(value)
        }else{
            let prev = this.head
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
        this.size++
    }
    removeIndex(index){
        if(index<0 || index>this.size){
            return
        }
        let removedValue
        if(index===0){
            removedValue = this.head
            this.head = removedValue.next
        }else{
            let curr = this.head
            for(let i=0; i<index-1; i++){
                curr = curr.next 
            }
            removedValue = curr.next
            curr.next =removedValue.next
        }
        this.size--
    }
    removedValue(value){
        if(this.isEmpty()){
            return null
        }
        let removedValue
        if(value===this.head.value){
            removedValue = this.head
            this.head = removedValue.next
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                removedValue = prev.next
                prev.next = removedValue.next
                this.size--
                return removedValue.value

            }return null
        }
    }
    search(value){
        if(this.isEmpty()){
            return 1
        }
        let i = 0
            let curr = this.head
            while(curr){
                if(curr.next===value){
                    return i
                }
                curr = curr.next
                i++   
            }

        return 1

    }
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    printT(){
        if(this.isEmpty()){
            console.log("the list is empty");
        }else{
            let curr = this.head
            let print = ""
            while(curr){
                print += `${curr.value} `
                curr = curr.next
            }
            console.log(print);
        }
    }
 

printReverse(){
    if(this.isEmpty()){
        console.log("list is emptyy");
    }else{
        let curr = this.tail
        let print = ""
        while(curr){
            print += `${curr.value} `
            curr = curr.prev
        }   
        console.log(print);
    }
}
}

let list = new linkedList()

list.appendT(5)
list.appendT(8)
list.appendT(6)
list.appendT(3)
list.appendT(9)
list.printT()
list.printReverse()
