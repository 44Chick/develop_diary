function solution(arr1, arr2){
	let answer=0;
    for(let i =0; i < arr1.length; i++){
        let temp = 0;
        temp = arr2[i] < 29 ? arr2[i] : 21; 
        // if(arr2[i] >= 29) arr2[i] = 21;
        answer += temp - arr1[i];
    }
	return answer;
}

let arr1=[9, 9, 9, 9, 7, 9, 8];
let arr2=[23, 23, 30, 28, 30, 23, 23];

console.log(solution(arr1, arr2))