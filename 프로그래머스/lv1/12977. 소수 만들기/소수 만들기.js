function solution(nums) {
    let result = 0;
/*
    const getCombs = (arr, num) => {
        const sums = [];
        if(num === 1) return arr.map(value => [value]); // 왜 map으로 처리했지
        
        arr.forEach((fixed, i, origin) => {
            const rest = origin.slice(i + 1);
            const combs = getCombs(rest, num - 1);
            const attached = combs.map(combination => [fixed, ...combination]);
            sums.push(...attached);
            return sums;
        })
    }  

*/
    
    const sums = getCombinations(nums, 3).map(arr => arr[0] + arr[1] + arr[2]);
    
    console.log(sums)
    
    sums.forEach(item => {
      for(let i = 3; i < item;++i){
          if(item % i === 0) {
              break;
          } else if (i === item - 1 ){
              console.log(item)
                ++result
        }         
      }
    })
    
    console.log(result)
    
    return result;
}

const getCombinations = function (arr, selectNumber) {
	const results = [];
	if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

	arr.forEach((fixed, index, origin) => {
		const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
		const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
		const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
		results.push(...attached); // 배열 spread syntax 로 모두다 push
	});

	return results; // 결과 담긴 results return
};

