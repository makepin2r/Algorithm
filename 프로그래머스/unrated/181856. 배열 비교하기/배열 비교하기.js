function solution(arr1, arr2) {
    if(arr1.length > arr2.length){
        return 1;
    } else if(arr1.length < arr2.length){
        return -1;      
    } else {
        const sum1 = arr1.reduce((total, v) => total + v, 0);
        const sum2 = arr2.reduce((total, v) => total + v, 0);
        return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
    }
}