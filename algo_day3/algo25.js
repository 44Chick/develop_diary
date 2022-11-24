function solution(left, right) {
    var answer = 0;
    let count = 0;
    let arr = {};
    for(let i = left; i <= right; i++){
        count = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                count += 2;
                if(j === Math.sqrt(i)) count--;
            }
        }
        answer += count%2 === 0 ? i : -i;
    }
    return answer;
}


const l = 13;
const r = 17;
console.log(solution(l,r))

// console.log(Math.sqrt(4)%1)