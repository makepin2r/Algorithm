function solution(age) {
    const nums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return [...(''+age)].reduce((total, v) => total + nums[v], '');
}