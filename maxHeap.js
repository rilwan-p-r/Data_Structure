class maxHeap {
    constructor() {
        this.data = []
    }

    getParentChild(i) {
        return Math.floor((i - 1) / 2)
    }

    getLeftChild(i) {
        return i * 2 + 1
    }

    getRightChild(i) {
        return i * 2 + 2
    }

    swap(i1, i2) {
        [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]]
    }

    push(value) {
        this.data[this.data.length] = value
        this.heapifyUp()
    }

    heapifyUp() {
        let current = this.data.length - 1

        while (this.data[current] > this.data[this.getParentChild(current)]) {
            this.swap(current, this.getParentChild(current))

            current = this.getParentChild(current)
        }
    }

    poll() {
        let value = this.data[0]
        this.data[0] = this.data[this.data.length - 1]
        this.data.length--
        this.heapifyDown()
        return value
    }

    heapifyDown() {
        let current = 0
        while (this.data[current] < this.data[this.getLeftChild(current)]) {
            let biggestIndex = this.getLeftChild(current)

            if (this.getRightChild(current) < this.data.length && this.data[this.getRightChild(current)] > this.data[this.getLeftChild(current)]) {
                biggestIndex = this.getRightChild(current)
            }

            if (this.data[current] < this.data[biggestIndex]) {
                this.swap(current, biggestIndex)
                current = biggestIndex
            } else {
                return
            }
        }
    }
}

function heapSort(array) {
    const heap1 = new maxHeap()
    let sortedArray = []

    for (let i = 0; i < array.length; i++) {
        heap1.push(array[i])
    }

    for (let i = 0; i < array.length; i++) {
        sortedArray.unshift(heap1.poll())
    }
    
    return sortedArray
}

const MaxHeap = new maxHeap()

MaxHeap.push(11)
MaxHeap.push(1)
MaxHeap.push(5)
MaxHeap.push(8)
MaxHeap.push(20)
MaxHeap.push(3)
MaxHeap.push(18)

console.log("Max Heap:", MaxHeap.data);

console.log(MaxHeap.poll());
console.log(MaxHeap.data);



let array = [20, 11, 18, 1, 8, 3, 5]
let sorted = heapSort(array)
console.log(sorted);            