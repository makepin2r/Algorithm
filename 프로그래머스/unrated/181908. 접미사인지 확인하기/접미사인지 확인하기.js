function solution(my_string, is_suffix) {
    return my_string.lastIndexOf(is_suffix) !== -1 ? 
        +(my_string.lastIndexOf(is_suffix) + is_suffix.length === my_string.length) 
        : 0;
}