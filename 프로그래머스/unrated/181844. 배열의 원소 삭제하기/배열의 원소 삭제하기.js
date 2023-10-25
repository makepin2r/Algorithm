function solution(arr, delete_list) {
    const delete_set = new Set(delete_list);
    return arr.filter(v => !delete_set.has(v));
}