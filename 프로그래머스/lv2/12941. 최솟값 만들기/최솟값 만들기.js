function solution(A,B){
    // 가설 1. 높은 수일 수록 적은 수와 곱해주는 것이 최솟값?
    A.sort((comp1, comp2) => comp1 - comp2); // 오름차순 정렬
    B.sort((comp1, comp2) => comp2 - comp1); // 내림차순 정렬
        
    return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
}