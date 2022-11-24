function solution(dartResult) {
    var answer = 0;
    let str = dartResult;
    let num = []
    num = str.split(/[STD*#]/g);
    str = str.split(/[0-9]/g);
    num = num.filter( v => v !== '');
    num = num.map(v => Number(v))
    str = str.filter( v => v !== '');
    for(let i =0; i < num.length; i++){
        if(str[i].includes('D')) num[i] = num[i]**2
        if(str[i].includes('T')) num[i] = num[i]**3
        if(str[i].includes('*')) {
            num[i]*= 2; num[i-1]*=2;
        }
        if(str[i].includes('#')) num[i] *= -1;
    }
    answer = num[0] + num[1] +num[2]
    return answer;
}


const dart = "1D2S#10S"
console.log(solution(dart));
// s= '*'
// t = '#'

// console.log(isNaN(s), isNaN(t))