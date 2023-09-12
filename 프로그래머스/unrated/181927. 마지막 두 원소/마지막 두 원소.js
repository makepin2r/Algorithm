function solution(num_list) {
    const result = [...num_list];
    if(result[result.length-1])
    return num_list.at(-1) > num_list.at(-2) ? [...num_list, (num_list.at(-1) - num_list.at(-2))] : [...num_list, (num_list.at(-1)*2)];
}