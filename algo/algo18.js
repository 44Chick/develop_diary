const repeat = (arr, n) => Array(n).fill(arr).flat();
const pat_1 = [1, 2, 3, 4, 5];
const pat_2 = [2, 1, 2, 3, 2, 4, 2, 5];
const pat_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];


function solution(input) {
    let answer = []
    let correct = [0,0,0]

    const input_1 = repeat(pat_1, Math.ceil(input.length/5))
    const input_2 = repeat(pat_2, Math.ceil(input.length/8))
    const input_3 = repeat(pat_3, Math.ceil(input.length/10))
    for (let i = 0; i < input.length; i++) {
        if(input[i] === input_1[i]) correct[0]++;
        if(input[i] === input_2[i]) correct[1]++; 
        if(input[i] === input_3[i]) correct[2]++; 
    }
    const max = Math.max(...correct);
    for(let i = 0; i < correct.length; i++){
        if(correct[i] === max) answer.push(i+1);
    }    
    return answer
}


const input = [1,2,3,4,5];
console.log(solution(input))