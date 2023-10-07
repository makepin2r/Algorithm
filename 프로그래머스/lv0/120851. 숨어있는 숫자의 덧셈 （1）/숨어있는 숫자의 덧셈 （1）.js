function solution(my_string) {
    return [...my_string].reduce((total, v) => total + (Number(v) || 0), 0);
}