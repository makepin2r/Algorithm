function solution(num_list) {
    return Math.max(...num_list.reduce((total, v, i) => i % 2 === 0 ? [total[0] + v, total[1]] : [total[0], total[1] + v], [0, 0]));
}