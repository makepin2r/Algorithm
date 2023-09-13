function solution(my_string, index_list) {
    let result = "";
    for(const idx of index_list) {
        result += my_string[idx];
    }
    return result;
}