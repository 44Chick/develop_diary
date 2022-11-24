function solution(numbers, hand) {
    var answer = '';
    let curL = 10;
    let curR = 12;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) numbers[i] = 11;
        if (numbers[i] % 3 === 1) {
            answer += 'L';
            curL = numbers[i]
        } else if (numbers[i] % 3 === 0) {
            answer += 'R';
            curR = numbers[i]
        } else {
            const difL = Math.abs(curL - numbers[i])
            const difR = Math.abs(curR - numbers[i])
            const disL = difL % 3 + Math.floor(difL / 3)
            const disR = difR % 3 + Math.floor(difR / 3)
            if (disL < disR) {
                answer += 'L'
                curL = numbers[i]
            } else if (disL > disR) {
                answer += 'R'
                curR = numbers[i]
            } else {
                if (hand === "left") {
                    answer += 'L';
                    curL = numbers[i]
                } else if (hand === "right") {
                    answer += 'R';
                    curR = numbers[i]
                }
            }
        }
    }
    return answer;
}



const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
const hand = "right" // "LRLLLRLLRRL"

console.log(solution(numbers, hand));``