function solution(arr){
	let answer = [[],[],[],[],[]];
	let check = [[],[],[],[],[]];
    let out = ''
    let 
    for(let i =0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            const com = arr[i][j];
            let comU, comD, comL, comR
            comU = arr[i][j-1] == 0? 0 : arr[i][j-1]
            comD = arr[i][j+1] == 0? 0 : arr[i][j+1]
            comL = arr[i-1][j] === 'undefined' ? 0 : arr[i-1][j]
            comR = arr[i+1][j] === undefined ? 0 : arr[i+1][j]
            if (!(com <= comU||
                com <= comD||
                com <= comL||
                com <= comR)) answer += com;
            else answer += '*'
        }
        answer +='\n'
    }

	console.log();
}

let arr1=[[7,4,6,5,9], [6,1,3,4,5], [4,8,5,6,9], [1,3,0,6,4], [6,4,8,1,7]]; 
solution(arr1)

console.log(arr1[-1])