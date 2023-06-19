function solution(arr) {
    let min = [...arr].sort((a,b) => a - b)[0]
    return arr.length === 1 ? [-1] : arr.filter(elem => elem !== min)
} 