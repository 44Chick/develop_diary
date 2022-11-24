function solution(N, stages) {
    var answer = [];
    // let currentS = stages.sort((a, b) => b - a);
    const maxPl = stages.length;
    let pl = new Array(N+1).fill(maxPl);
    let co = new Array(N+1).fill(0);
    for(let i = 0; i < stages.length; i++){
        let count = 0;
        for(j = 1; j <= N; j++){
            if(stages[i] === j){
                co[j]++;
            }
        }
    }
    for(let i = 1; i <= N; i++){
        answer[i-1] = i;
        pl[i] =  pl[i - 1] - co[i - 1]
        console.log(co[i], pl[i])
        // pl[i] =  co[i]/pl[i] 
    }
    answer = answer.sort((a,b)=>   pl[b] - pl[a])
    
    // console.log(co,pl)

    return answer;
}


const nSt = 5;
const nPl = [2, 1, 2, 6, 2, 4, 3, 3] //[3,4,2,1,5]

console.log(solution(nSt, nPl))