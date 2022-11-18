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

<br/><br/><br/>
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
String 객체의 slice() 메소드는 statement 변수에 저장된 문자열을 변경하는 것이 아니라 사실은 새로운 문자열을 생성하여 반환하고 있다. 
그 이유는 문자열은 변경할 수 없는 immutable value이기 때문이다.
<br/>

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
<br/><br/><br/>

# 불변 데이터 패턴(immutable data pattern)
의도하지 않은 객체의 변경이 발생하는 원인의 대다수는 “레퍼런스를 참조한 다른 객체에서 객체를 변경”하기 때문이다. 
이 문제의 해결 방법은 비용은 조금 들지만 객체를 불변객체로 만들어 프로퍼티의 변경을 방지하며 객체의 변경이 필요한 경우에는 참조가 아닌 객체의 방어적 복사(defensive copy)를 통해 새로운 객체를 생성한 후 변경한다.
<br/>

### 객체의 방어적 복사(defensive copy)
#### Object.assign
<br/>
Object.assign은 타킷 객체로 소스 객체의 프로퍼티를 복사한다. 이때 소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 타켓 객체의 프로퍼티들은 소스 객체의 프로퍼티로 덮어쓰기된다. 리턴값으로 타킷 객체를 반환한다. 


```js
// Syntax
Object.assign(target, ...sources)

const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// 새로운 빈 객체에 user1을 copy한다.
const user2 = Object.assign({}, user1);
// user1과 user2는 참조값이 다르다.
console.log(user1 === user2); // false

user2.name = 'Kim';
console.log(user1.name); // Lee
console.log(user2.name); // Kim

// 객체 내부의 객체(Nested Object)는 Shallow copy된다.
console.log(user1.address === user2.address); // true

user1.address.city = 'Busan';
console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan
```
Object.assign을 사용하여 기존 객체를 변경하지 않고 객체를 복사하여 사용할 수 있다. Object.assign은 완전한 deep copy를 지원하지 않는다. 객체 내부의 객체(Nested Object)는 Shallow copy된다.
user1 객체를 빈객체에 복사하여 새로운 객체 user2를 생성하였다. user1과 user2는 어드레스를 공유하지 않으므로 한 객체를 변경하여도 다른 객체에 아무런 영향을 주지 않는다.
주의할 것은 user1 객체는 const로 선언되어 재할당은 할 수 없지만 객체의 프로퍼티는 보호되지 않는다. 즉 객체의 내용은 변경할 수 있다.

### 불변객체화를 통한 객체 변경 방지
#### Object.freeze 
<br/>
Object.freeze()를 사용하여 불변(immutable) 객체로 만들수 있다.
<br/>
하지만 객체 내부의 객체(Nested Object)는 변경가능하다.
<br/>

```js


```



















