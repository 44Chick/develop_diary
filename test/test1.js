function solution(arr1){
	let answer= "";
    let count = arr1.filter(v => v === 0).length;
    switch(count){
        case 0: answer = "모"; break;
        case 1: answer = "도"; break;
        case 2: answer = "개"; break;
        case 3: answer = "걸"; break;
        case 4: answer = "윷"; break;
    }
	return answer;
}

let arr1=[0,1,0,0];
console.log(solution(arr1))