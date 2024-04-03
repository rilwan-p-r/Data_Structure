class maxHeap{
    constructor(){
        this.data=[]
    }
    getParent(i){
        return Math.floor((i-1)/2)

    }
    getLeftParent(i){
        return i*2+1
    }
    getRightParent(i){
        return i*2+2
    }
    swap(i1,i2){
        [this.data[i1],this.data[i2]]=[this.data[i2],this.data[i1]]
    }
    push(value){
        this.data[this.data.length]=value
        this.heapfyUp()
    }
    heapfyUp(){
        let current = this.data.length-1
        while(this.data[current]>this.data[this.getParent(current)]){
            this.swap(current,this.getParent(current))
            current = this.getParent(current)
        }
    }
    poll(){
        let val = this.data[0]
        this.data[0] = this.data[this.data.length-1]
        this.data.length--
        this.heapfyDown()
        return val
    }
    heapfyDown(){
        let current = 0
        while(this.data[current]<this.data[this.getLeftParent(current)]){
            let biggestIndex = this.getLeftParent(current)
            if(this.getRightParent(current)<this.data.length && this.data[this.getRightParent(current)]>this.data[this.getLeftParent(current)]){
                biggestIndex = this.getRightParent(current)
            }
            if(this.data[current]<this.data[biggestIndex]){
                this.swap(current,biggestIndex)
                current=biggestIndex
            }else{
                return
            }
        }
    }
    
}
function heapSort(arr){
    let heap1 = new maxHeap()
    let sortedArray = []
    for(let i=0;i<arr.length;i++){
        heap1.push(arr[i])
    }
    for(let i=0;i<arr.length;i++){
        sortedArray.unshift(heap1.poll())
    }
    return sortedArray
}
let heap = new maxHeap()
heap.push(2)
heap.push(3)
heap.push(1)
console.log(heap.data);
console.log(heap.poll());
console.log(heap.data);

let array = [2,1,6,4,3,9]
let sorted = heapSort(array)
console.log(sorted);