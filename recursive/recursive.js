function recursive(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,left,right){
    if(left>right){
        return -1
    }
    let middle = Math.floor((left+right)/2)
    if(arr[middle]===target){
        return middle
    }
    if(target<arr[middle]){
        return search(arr,target,left,middle-1)
    }
    return search(arr,target,middle+1,right)

}
console.log(recursive([2,4,6,8,9],4));

class Node{
    constructor(value){
        this.value = value
        this.next = null
        
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
    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
            this.tail = node.next
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
            this.tail = node

        }
        this.size++
    }
    
    reverse(){
        if(this.isEmpty()){
            return null
        }else{
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
    }
    print(){
        if(this.isEmpty()){
            console.log("the list is empty");
        }else{
            let curr = this.head
            let print =  ""
            while(curr){
                print += `${curr.value} `
                curr = curr.next
            }
            console.log(print);
        }
    }
}
let list = new linkedList()
list.append(7)
list.append(8)
list.print()