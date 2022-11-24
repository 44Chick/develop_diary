function solution(d, budget) {
    let answer = 0;
    d = d.sort((a, b) =>  a-b)
    for(let i = 0; i < d.length; i++){
        budget -= d[i]
        if(budget < 0) {answer = i; break;}
    }
    if (budget >= 0) answer = d.length;
    // while(budget >= 0){
    //     budget -= d[answer];
    //     answer++;
    // }
    return answer;
}

const d = [1,3,2,5,4]	
const budget = 20 //3
console.log(solution(d,budget))