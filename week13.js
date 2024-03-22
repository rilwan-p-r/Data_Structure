// function recursive(arr,target){
//     return search(arr,target,0,arr.length-1)

// }
// function search(arr,target,left,right){
    
//     let middle = Math.floor((left+right)/2)
    
//     if(arr[middle]===target){
//         return middle
//     }
//     if(target<arr[middle]){
//         return search(arr,target,left,middle-1)
//     }else{
//         return search(arr,target,middle+1,right)
//     }

// }

// console.log(recursive([3,4,5,6,7,8],7));

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
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next =this.head
            this.head = node
        }
        this.size++
    }

    searchMiddle(){
        if(this.isEmpty()){
            return null
        }   let slow = this.head
            let fast = this.head
        
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value

        
        
    }
    print(){
        if(this.isEmpty()){
            console.log("the list is empty");
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
list.prepend(5)
list.prepend(6)
list.prepend(9)
list.prepend(10)
list.print()
console.log(list.searchMiddle());