function solution(n, arr1, arr2) {
    let stArr1 = arr1.map(v => Number(v.toString(2)))
    let stArr2 = arr2.map(v => Number(v.toString(2)))
    let sumArr = []
    for(let i = 0; i < n; i++){
        sumArr[i] = String((stArr1[i] + stArr2[i])).padStart(n,'0');
        sumArr[i] = sumArr[i].replaceAll('0',' ');
        sumArr[i] = sumArr[i].replaceAll(/[12]/g,'#');
    }
    return sumArr;
}

const n	= 5
const arr1 = [9, 20, 28, 18, 11]
const arr2 = [30, 1, 21, 17, 28]
// 출력 ["#####","# # #", "### #", "# ##", "#####"]

console.log(solution(n, arr1, arr2))