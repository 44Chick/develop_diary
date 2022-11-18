# 자바스크립트의 주요 종류
자바스크립트의 데이터형에는 기본형과 참조형 두 종류가 있다.

### 기본형

수치형(number) : 수치	<br/>
문자열(string) : 싱글 더블쿼트로 둘러싸인 문자 집합	<br/>
진위치형(boolean) : true(진위)false(가짜)	<br/>
심볼형(symbol) : 심볼 <br/>
특수형(null/undefined) : 값이 비어 있는지 미정의	<br/>
<br/>

### 참조형

배열(array) : 데이터 집합 (인덱스 번호로 참조 가능)	<br/>
오브젝트(object) : 데이터 집합 (이름으로 접근 가능)	<br/>
함수(function) : 일련의 처리 집합	<br/>

### 기본형과 참조형의 차이
이 두 가지 차이점은 값을 변수에 저장하는 방법이다.

#### 기본형
number·string·boolean·symbol과 같은 기본형은 변수에 값이 그대로 저장된다.  <br/>

![img_primetive](https://user-images.githubusercontent.com/49892292/202683887-ce528028-f86c-455f-a819-44225fa6f985.png)

#### 참조형
array·object·function과 같은 참조형은 참조치를 저장한다. <br/>
※ 참조치 → 값을 실제로 격납하고 있는 메모리상의 주소<br/><br/>

![img_refference](https://user-images.githubusercontent.com/49892292/202684031-aee5e5e8-67c4-4f29-9a96-c99050636984.png)


기본형·참조형에 따라 스크립트의 동작이 다르므로 주의!


# Immutability(불변성)
객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴.

Javascript의 원시 타입(primitive data type)은 변경 불가능한 값(immutable value)이다.
(변경이 불가능하다는 뜻은 메모리 영역에서의 변경이 불가능하다는 뜻이다. 재할당은 가능하다)

```js
let statement = 'I am an immutable value'; // string은 immutable value

let otherStr = statement.slice(8, 17);

console.log(otherStr);   // 'immutable'
console.log(statement);  // 'I am an immutable value'
```
Stirng 객체의 slice() 메소드는 statement 변수에 저장된 문자열을 변경하는 것이 아니라 사실은 새로운 문자열을 생성하여 반환하고 있다. 
그 이유는 문자열은 변경할 수 없는 immutable value이기 때문이다.


원시 타입 이외의 모든 값은 객체(Object) 타입이며 객체 타입은 변경 가능한 값(mutable value)이다.
즉, 객체는 새로운 값을 다시 만들 필요없이 직접 변경이 가능하다는 것이다.

```js
var arr = [];
console.log(arr.length); // 0

var v2 = arr.push(2);    // arr.push()는 메소드 실행 후 arr의 length를 반환
console.log(arr.length); // 1
```
문자열의 예와 같이 배열이 동작한다면 v2는 새로운 배열(하나의 요소를 가지고 그 값은 2인)을 가지게 될 것이다. 그러나 객체인 arr은 push 메소드에 의해 update되고 v2에는 배열의 새로운 length 값이 반환된다.
처리 후 결과의 복사본을 리턴하는 문자열의 메소드 slice()와는 달리 배열(객체)의 메소드 push()는 직접 대상 배열을 변경한다. 그 이유는 배열은 객체이고 객체는 immutable value가 아닌 변경 가능한 값이기 때문이다.
























