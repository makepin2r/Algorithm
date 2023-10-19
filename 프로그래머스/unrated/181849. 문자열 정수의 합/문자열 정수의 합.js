function solution(num_str) {
    return num_str.split("").reduce((total, v) => total + ~~v, 0)
}