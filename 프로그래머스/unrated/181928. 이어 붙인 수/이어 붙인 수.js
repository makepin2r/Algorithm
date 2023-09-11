function solution(num_list) {
    let odd = "";
    let even = "";
    num_list.map((item) => item % 2 === 0 ? even += item : odd += item);
    
    return Number(odd) + Number(even);
}