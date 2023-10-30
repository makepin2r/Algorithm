function solution(hp) {
    let answer = 0;
    let [general, soldier, worker] = [5, 3, 1]
    while (hp > 0) {
        if(hp >= general){
            hp -= general;
        } else if(hp >= soldier){
            hp -= soldier;
        } else if(hp >= worker){
            hp -= worker;
        }
        answer++;
    }
    return answer;
}