function solution(nums) {
    var answer = 0;
    let sum_1;
    for (let i = 0; i + 2 < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sum_1 = nums[i] + nums[j] + nums[k];
                for (let l = 2; l < sum_1; l++) {
                    if (sum_1 % l === 0) break;
                    if (parseInt(sum_1/2) === l + 1) answer++;
                }
            }
        }
    }
    return answer;
}


const num = [1, 2, 3, 4]
console.log(solution(num));