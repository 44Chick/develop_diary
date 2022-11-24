// const date = new Date(2022, 11, 27 + 99);
// console.log(date.getDate(), date.getMonth(),date.getDay(), date.getFullYear())

function solution(month, day){
    const dates = new Date(2019, month, day +98);
    const ans_m = dates.getMonth();
    const ans_d = dates.getDate();
	let result=`${ans_m}월 ${ans_d}일`
	return result;
}

// const a = [11, 27] // 3.5
// const a = [6, 22] // 9.28
// const a = [1, 18] // 4.26

console.log(solution(...a))