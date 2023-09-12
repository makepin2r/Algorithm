function solution(num_list) {
    const multiply = num_list.reduce((acc, cur) => acc *= cur);
    const sum = num_list.reduce((acc, cur) => acc += cur);
    return multiply < Math.pow(sum, 2) ? 1 : 0;
}