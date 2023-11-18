function solution(my_string, m, c) {
    return [...my_string].reduce((total, v, i) => i % m === (c - 1) ? total + v : total, "");
}