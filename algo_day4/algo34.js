function solution(nums) {
    var answer = 0;
    let sets = new Set(nums)
    sets = Array.from(sets)
    answer = nums.length/2 >= sets.length ? sets.length : nums.length/2;
    return answer;
}


const nums = [3,1,2,3]	//2
console.log(solution(nums))