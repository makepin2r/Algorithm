function solution(my_string, indices) {
    return [...my_string].reduce((total, v, i) => total += indices.indexOf(i) === -1 ? v : "", "");
}