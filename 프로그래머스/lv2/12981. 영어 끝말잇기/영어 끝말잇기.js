function solution(n, words) {
    const answer = [0, 0];
    for(let i = 1; i < words.length; ++i) {
        console.log(words.lastIndexOf(words[i]));
        if(words[i].at(0) !== words[i-1].at(-1) || words.indexOf(words[i]) !== i) {
            // 로직 추가하기
            return [(i % n) + 1, ~~((i+1) / n) + ((i+1) % n > 0 ? 1: 0)];
        }
    }
    return answer;
}