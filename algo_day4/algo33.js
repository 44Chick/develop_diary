function solution(n, lost, reserve) {
    var answer = 0;
    let clothes = new Array(n).fill(1);
    for(let i = 0; i < lost.length; i++){
        clothes[lost[i]-1] -= 1
    }    
    for(let i = 0;i < reserve.length; i++){
        clothes[reserve[i]-1] += 1
    }
    for(let i = 0; i < n; i++){
        if(clothes[i] === 0 && clothes[i-1] === 2){
            clothes[i] += 1
            clothes[i - 1] -=1
        }else if(clothes[i] === 0 && clothes[i+1] === 2){
            clothes[i] += 1
            clothes[i + 1] -=1
        }
    }
    clothes = clothes.filter( v => v > 0)
    answer = clothes.length;
    return answer;
}

const n = 5	
const test = [] 
const lost = [2, 4]	
const reserve = [1, 3, 5]
console.log(solution(n,lost, reserve))
