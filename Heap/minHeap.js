class heap{
    constructor(){
        this.data=[]
    }
    getParent(i){
        return Math.floor((i-1)/2)
    }
    getLeftChild(i){
        return i*2+1
    }
    getRightChild(i){
        return i*2+2
    }
    push(value){
        this.data[this.data.length]=value
        this.heapfyUp()
    }
    swap(l1,l2){
        [this.data[l1],this.data[l2]]=[this.data[l2],this.data[l1]]
    }
    heapfyUp(){
        let current = this.data.length-1
        while(this.data[current]<this.data[this.getParent(current)]){
            this.swap(current,this.getParent(current))
            current=this.getParent(current)
        }
    }
    poll(){
        let val = this.data[0]
        this.data[0]=this.data[this.data.length-1]
        this.data.length--
        this.heapfyDown()
        return val
    }
    heapfyDown(){
        let current = 0
        while(this.data[current]>this.data[this.getLeftChild(current)]){
            let smallestIndex = this.getLeftChild(current)
            if(this.data[this.getRightChild(current)]!==undefined &&
            this.getLeftChild(current)>this.getRightChild(current) ){
                smallestIndex = this.getRightChild(current)
            }
            if(this.data[current]>this.data[smallestIndex]){
                this.swap(current,smallestIndex)
                current=smallestIndex
            }
        }
    }
}
let heapfy = new heap()
heapfy.push(10)
heapfy.push(4)
heapfy.push(31)
heapfy.push(1)
heapfy.push(11)
heapfy.push(21)
heapfy.push(12)
console.log(heapfy.data);
console.log(heapfy.poll());
console.log(heapfy.data);
console.log(heapfy.poll());
console.log(heapfy.data);
console.log(heapfy.poll());
console.log(heapfy.data);