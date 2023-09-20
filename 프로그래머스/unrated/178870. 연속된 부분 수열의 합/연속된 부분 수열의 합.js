function solution(sequence, k) {
    let [l,r] = [0, 0]; // pointer 배열
    let candidates = []; // 합이 k인 경우의 인덱스들
    let sum = sequence[l]; // 합
    
    while(r < sequence.length) {
        if(sum < k) sum += sequence[++r];
        else if(sum > k) sum -= sequence[l++];
        else {
            candidates.push([l,r]);
            sum += sequence[++r];
            sum -= sequence[l++];
        }
    }
    
    return candidates.sort((a,b) => (a[1] - a[0]) - (b[1] - b[0]))[0];
}