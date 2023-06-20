function solution(n) {
    const prime = Array.from({length:n+1}, ()=>true);
    prime.splice(0, 2, false, false);
    //console.log(prime[0], prime[1]);

    for(let i = 2; i < n; ++i){
        if(prime[i]){
            for(let j = i*i; j <= n; j+=i){
                prime[j] = false;
            }
        }
    }
    //console.log(prime)
    return prime.filter(v => v === true).length;
}