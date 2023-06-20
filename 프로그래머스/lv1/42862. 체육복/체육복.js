function solution(n, lost, reserve) {
    let map = new Map();
    let answer = 0;
    
    for(let i = 1; i <= n; ++i){
        map.set(i, 1);
    }
    reserve.forEach(val => {
        map.set(val, map.get(val) + 1);
    })
    lost.forEach(val => {
        map.set(val, map.get(val) - 1);
    })
    for(let [k, v] of map){
        if(v === 0){
            if(map.get(k - 1) > 1) {
                map.set(k, v + 1);
                map.set(k-1, map.get(k - 1) - 1);
            }
            else if(map.get(k + 1) > 1) {
                map.set(k, v + 1);
                map.set(k+1, map.get(k + 1) - 1);
            }
        }
    }
    //console.log(map)
    
    for (let [k, v] of map){
        if(v > 0) ++answer;
    }
    return answer;
}