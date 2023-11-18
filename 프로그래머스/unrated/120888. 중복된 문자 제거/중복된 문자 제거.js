function solution(my_string) {
    return [...my_string].reduce((total, v) => total.includes(v) ? total : total + v, "");
}