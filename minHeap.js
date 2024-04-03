class Heap {
    constructor() {
        this.data = []
    }

    getParent(i) {
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

        while (this.data[current] < this.data[this.getParent(current)]) {
            this.swap(current, this.getParent(current))

            current = this.getParent(current)
        }
    }

    poll() {        
        const value = this.data[0]
        this.data[0] = this.data[this.data.length - 1]
        this.data.length--
        this.heapifyDown()
        return value
    }

    heapifyDown() {
        let current = 0
        while (this.data[current] > this.data[this.getLeftChild(current)]) {
            let smallestIndex = this.getLeftChild(current)

            if (this.data[this.getRightChild(current)] !== undefined &&
                this.data[this.getLeftChild(current)] > this.data[this.getRightChild(current)]) {
                    smallestIndex = this.getRightChild(current)
            }

            if (this.data[current] > this.data[smallestIndex]) {
                this.swap(current,smallestIndex)
                current = smallestIndex
            }
        }
    }
}

const heap = new Heap()

heap.push(10)
heap.push(5)
heap.push(15)
heap.push(17)
heap.push(1)
heap.push(8)






console.log(heap.data);
console.log(heap.getLeftChild(1));
heap.swap(3,4)
console.log(heap.data);