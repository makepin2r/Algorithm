function solution(my_strings, parts) {
    return my_strings.reduce((total, v, i) => total += v.slice(parts[i][0], parts[i][1] + 1), "");
}