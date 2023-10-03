function solution(elements) {
    const set = new Set(); 
    for(let i = 1; i <= elements.length; ++i){ // 부분 수열 길이
        let sum = 0;
        for(let j = 0; j < elements.length; ++j){ // 전체 빼고 부분 수열 길이
            // 부분 수열의 합 구하기
            if(j === 0){
                // 최초 인덱스에 대한 합
                for(let k = 0; k < i; ++k){
                    sum += elements[k];
                }
            } else {
                sum -= elements[j - 1];
                sum += elements[(i + j - 1) % elements.length];
            }
            // set에 넣기
            set.add(sum);
        }
    }
    return set.size;
}