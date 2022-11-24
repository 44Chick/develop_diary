function solution(s){
	let answer="";
    s = s.split(' ');
    let origin = [];
    let n_origin = [];
    for(v of s){
        for(let i = 2; i < v; i++){
            if(v % i === 0) n_origin.push(v); break;
        }
    }
    console.log(origin, n_origin)
	return answer;
}
let s="97 75 88 99 95 92 73";

console.log(solution(s))