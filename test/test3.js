function solution(arr) {
    let answer = ''
    let inputArr = Array.from(Array(7), () => new Array(7).fill(0))
    for (let i = 1; i <= arr.length; i++) {
        for (let j = 1; j <= arr.length; j++) {
            inputArr[i][j] = arr[i - 1][j - 1]
        }
    }
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            const com = inputArr[i][j];
            let comU, comD, comL, comR
            comU = inputArr[i - 1][j]
            comD = inputArr[i + 1][j]
            comL = inputArr[i][j - 1]
            comR = inputArr[i][j + 1]
            if (com <= comU ||
                com <= comD ||
                com <= comL ||
                com <= comR) answer += com + ' ';
            else answer += '* '
        }
        answer += '\n'
    }
    console.log(answer)

    // console.log(inputArr)
    // let answer = [[],[],[],[],[]];
    // let check = [[],[],[],[],[]];
    // let out = ''
    // for(let i =0; i < 5; i++){
    //     for(let j = 0; j < 5; j++){
    //         const com = arr[i][j];
    //         let comU, comD, comL, comR    //         comU = arr[i][j-1] == 0? 0 : arr[i][j-1]
    //         comD = arr[i][j+1] == 0? 0 : arr[i][j+1]
    //         comL = arr[i-1][j] === 'undefined' ? 0 : arr[i-1][j]
    //         comR = arr[i+1][j] === undefined ? 0 : arr[i+1][j]
    //         if (!(com <= comU||
    //             com <= comD||
    //             com <= comL||
    //             com <= comR)) answer += com;
    //         else answer += '*'
    //     }
    //     answer +='\n'
    // }
    // console.log();
}

let arr1 = [[7, 4, 6, 5, 9], [6, 1, 3, 4, 5], [4, 8, 5, 6, 9], [1, 3, 0, 6, 4], [6, 4, 8, 1, 7]];
solution(arr1)

// console.log(arr1[-1])