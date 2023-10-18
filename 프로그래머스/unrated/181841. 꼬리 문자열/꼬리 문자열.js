function solution(str_list, ex) {
    return str_list.reduce((total, v) => total += (v.includes(ex) ? "" : v), "");
}