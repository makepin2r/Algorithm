function solution(num_list) {
    const even = num_list.reduce((total, v) => total += v % 2 === 0 ? 1 : 0, 0);
    return [even, num_list.length - even];
}