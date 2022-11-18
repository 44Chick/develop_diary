<h1> JavaScript 기본


<h3> JavaScript 자료형
 
<h4> 느승한 타입(loosely typed)
  
JS의 변수는 어떤 특정한 타입과 연결되지 않으며, 모든 타입으로 할당 및 재할당이 가능하다.

  ```js
/* JavaScript Example */
let a = 13; // Number (숫자)선언
let b = 'thirteen' // String (문자열) 선언
```
  ```java
/* Java Example */
int a = 13; // int (숫자)선언
String b = 'thirteen' // String(문자열) 선언
```
JavaScript 는 let 이라고 선언되었으나 let 타입이라는 뜻은 아니다. JavaScript의 변수는 타입을 가지고 있으며, 그것은 내부에서 정해진다.
JavaScript는 모두 5개의 Primitive type을 가지고 있으며,Number, String, Boolean, Null, Undefined이다.
 
 <br/><br/>
 
 <h4>동적 언어(dynamic language)
  타입 변환은 느슨한 타입과 가까운 관계가 있다. 내부적으로 타입이 관리되기 때문에, 타입 변환도 쉽게 이루어진다. 
  ```js
/* JavaScript Example */
let a = 13; // Number (숫자) 선언
a = '13' // String (문자열) 변함
```
