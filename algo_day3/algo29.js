function solution(array, commands) {
    var answer = [];
    let temp;
    for(v of commands){
        temp = []
        temp = arr.slice(v[0]-1,v[1]).sort((a,b) => a - b)
        answer.push(temp[v[2]-1])
    }
    return answer;
}

const arr = [1, 5, 2, 6, 3, 7, 4]	
const com = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

console.log(solution(arr,com))