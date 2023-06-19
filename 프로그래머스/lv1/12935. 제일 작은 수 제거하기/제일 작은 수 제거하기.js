function solution(arr) {
    let idx = 0;
    arr.map((_, i) => {
        if (arr[i] < arr[i+1]) idx = i
    })
    arr.splice(idx, 1);
    return arr
} 