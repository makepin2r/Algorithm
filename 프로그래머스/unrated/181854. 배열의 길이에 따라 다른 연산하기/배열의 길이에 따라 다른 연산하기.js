function solution(arr, n) {
    for(let i = arr.length - 1; i >= 0; i -= 2) {
        arr[i] += n;
    }
    return arr;
}