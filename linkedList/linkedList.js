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

    // O(1)
    // prepend(value){
    //     let node = new Node(value)
    //     if(this.isEmpty()){
    //         this.head = node
    //     }else{
    //         node.next = this.head
    //         this.head = node

    //     }
    //     this.size++;
    // }
    // // O(n)
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

    // prepend(value){
    //     let node = new Node(value)
    //     if(this.isEmpty()){
    //         this.head = node
    //         this.tail = node
    //         this.size++
    //     }else{
    //         node.next = this.head
    //         this.head = node
    //         this.size++
    //     }
    // }
    // append(value){
    //     let node = new Node(value)
    //     if(this.isEmpty()){
    //         this.head = node
    //         this.tail = node
    //         this.size++
    //     }else{
    //         this.tail.next = node
    //         this.tail = node
    //         this.size++
    //     }
    // }

    prepend(value){
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
    append(value){
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
    insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }

    }

    removeForm(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removedValue
        if(index === 0){
            removedValue = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            removedValue = prev.next
            prev.next = removedValue.next    
        }
        
        this.size--
        return removedValue.value
        
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        let removedValue
        if(this.head.value === value){
            removedValue = this.head
            this.head = removedValue.next
            this.size--
            return removedValue.value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !==value){
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
            return -1
        }
        let i=0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
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

    removeFormFront(){
        if(this.isEmpty()){
            return null
        }else{
            let value = this.head.value
            this.head = this.head.next
            this.size--
            return value
        }
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        let value = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next !==  this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    removeFormEndDB(){
        if(this.isEmpty()){
            return null
        }
        let value = this.tail
        if(this.size===1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
        return value
    }
    print(){
        if(this.isEmpty()){
            console.log('The list is empty');
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
            console.log('The list is empty');
        }else{
            let curr =this.tail
            let rev = "";
            while(curr){
                rev += `${curr.value} `;
                curr = curr.prev
            }
            console.log(rev);
        }
    }
}
let list = new linkedList
list.prepend(8)
list.prepend(7)
list.prepend(6)
list.print()
list.printReverse()