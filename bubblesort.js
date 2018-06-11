

function bubbleSort(arr) {
    let isSorted = false; 

    while (!isSorted){
        let length = arr.length
        isSorted = true;

        for (let i = 0; i < length - 1; i++){
            if (arr[i] > arr[i + 1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                isSorted = false;
            }
            length--;
        }
    }
    return arr;
}