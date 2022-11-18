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






