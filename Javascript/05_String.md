# 05. String

> 자바스크립트는 문자열의 길이에 상관없이 문자열 형태로 저장된다.
>
> 또한 문자열은 `UTF-16` 형식을 갖는다.



### 문자열의 생성

- 따옴표로 문자열 생성하기

```javascript
let s = "HELLO";
let ss = "world";
```

- 벡틱으로 문자열 생성하기
  - 벡틱으로 문자열을 감싸면 여러 줄에 걸쳐서 문자열을 생성할 수 있다.
  - 또한 `${}`을 사용하면 변수에 저장된 값을 출력할 수 있다.

```javascript
let s = `hello`;
s = `h
e
l
l
o
!`;
```

```javascript
let x = 2;
let y = 5;
let sum = x+y;
console.log(`${x}+${y} = ${sum}`);
```



### 문자열 연결하기

- `+`연산자를 통해 문자열을 연결할 수 있다.

```javascript
'hello'+'world';
```

- 피연산자 중 하나가 문자열이라면 다른 피연산자를 문자열로 변환하여 연결한다.

```javascript
'hell'+5;
let n = 5;
console.log("n=" + n); // n=5
```



### 특정 문자읽기

- 배열과 마찬가지로 문자열을 인덱스로 접근할 수 있다.

```javascript
let str = 'apple';
console.log(str[1]); // p
console.log(str.charAt(str.length-1)); // e
```

- 특정 문자에 접근할 수 있지만 수정은 불가능하다. 기존의 문자열을 수정하기 위해서는 새로운 문자열을 생성해야한다.



### String 객체의 메서드

> 문자열과 관련된 메서드와 프로퍼티는 다양하다. 그 중 대표적인 메서드를 알아본다.



- **대-소문자 변경하기**

```javascript
let str1 = 'apple';
console.log(str1.toUpperCase()); // APPLE

let str2 = 'BANANA';
console.log(str2.toLowerCase()); // banana

// 특정 문자 하나만 변경할 수도 있다.
console.log(str1[0].toUpperCase()); // B
```



- **부분 문자열 찾기**
  - 부분 문자열을 찾았다면 부분 문자열이 처음 나오는 위치를 반환하며, 찾지 못했을 때는 -1을 반환한다.
  - 또한 옵션을 주어 특정 위치부터 찾도록 할 수 있다.

```javascript
let str = 'hello';
console.log(str.indexOf('l')); // 2

console.log(str.indexOf('l', 3)); // 3
```



- **부분 문자열 생성**

```javascript
let str = 'hello world';
console.log(str.slice(6)); // world;
console.log(str.slice(3, 7));// lo w
```



- **문자열을 배열로 반환**
  - 문자열 내의 특정 문자를 기준으로 배열로 생성할 수 있다.

```javascript
let str = 'apple';
let new_str = str.split('');
console.log(new_str); // [ 'a', 'p', 'p', 'l', 'e' ]
```

```javascript
let str = 'a-b-c-d';
console.log(str.split('-')); // [ 'a', 'b', 'c', 'd' ]
```

