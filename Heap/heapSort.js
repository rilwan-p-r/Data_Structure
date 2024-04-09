function createHeap(array) {
    let heap = [...array]

    for(let i=Math.ceil((heap.length/2)-1); i>=0; i-- ){
        heapify(heap,i,heap.length)
    }
    return heap
}

function heapify(heap,i,heapSize) {
    let left = i*2+1
    let right = i*2+2
    let largest = i

    if (left < heapSize && heap[left] > heap[largest]) {
        largest = left
    }

    if (right < heapSize && heap[right] > heap[largest]) {
        largest = right
    }

    if (largest !== i) {
        [heap[largest], heap[i]] = [heap[i], heap[largest]]
        heapify(heap,largest,heapSize)
    }
}

function heapSort(array) {
    let heap = createHeap(array)
    let sortedArray = []

    while (heap.length > 0) {
        sortedArray.unshift(heap.shift())
        heap = createHeap(heap)
    }
    return sortedArray
}

let array = [10,4,7,1,9,15,2]
let sortedArray = heapSort(array)

console.log(sortedArray);