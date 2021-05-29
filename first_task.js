function qsort(arr, low, high) {
    if(low < high) {
        split_index = partition(arr, low, high)
        qsort(arr, low, split_index)
        qsort(arr, split_index+1, high)
    }
}

function partition(arr, low, high){
    // Берем средний элемент
    const pivot = arr[Math.floor((high + low)/2)];
    low--
    high++
    while(true) {
        //Находим индекс первого элемента большего чем опорный
        low++
        while(arr[low] < pivot) {
            low++
        }
        //Находим индекс первого элемента(с конца) меньшего чем опорный, 
        high--
        while(arr[high] > pivot) {
            high--
        }

        if(low >= high) {
            return high
        }
        let temp = arr[low]
        arr[low] = arr[high]
        arr[high] = temp
    }
};

function findAndDeleteDuplicates(arr) {
    console.log('Массив ' + arr.toString())

    qsort(arr,0,arr.length-1)
    
    console.log('Массив после сортировки ' + arr.toString())
    duplicates = []
    index = 0
    isSeria = false
    num_duplicates = 0
    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i] == arr[i+1]) {
            isSeria = true
            num_duplicates++
        }
        else {
            if(isSeria) {
                duplicates.push(arr[i-1])
                isSeria = false
            }
            arr[index++] = arr[i]
        }
    }
    console.log('Финальный массив без повторов: ' + arr.splice(0, arr.length-num_duplicates-1).toString())
    console.log('Дупликаты ' + duplicates.toString())
}

function createArray(range, size) {
    let arr = []
    for(let i=0; i<size; i++) {
        arr.push(Math.floor(Math.random() * range))  
    }
    return arr
}



arr = createArray(10, 10)
findAndDeleteDuplicates(arr)

