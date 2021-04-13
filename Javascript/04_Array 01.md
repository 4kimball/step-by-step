# 04. Array 기본 



### 배열 생성하기

- 배열 리터럴

```javascript
let arr = [1, 2, 3, 4];
```

- Array 생성자

```javascript
let arr = new Array(1, 2, 3, 4);
```



### 배열 요소 읽기

- 배열의 인덱스는 0부터 시작하며 원하는 인덱스를 바로 참조할 수 있다.

```javascript
let alpha = ['A', 'B', 'C', 'D'];
console.log(alpha[1]) // 'B'가 출력된다.
```

- 기존의 C와 Java와 같은 언어의 배열은 각 원소들이 메모리의 연속된 공간에 차례대로 배치되어 있다. 하지만 자바스크립트의 배열은 Array 객체이며 완전한 배열이 아닌 배열의 기능을 따라하는 것이다.
  - 따라서 배열의 원소에 접근할 때 사용하는 대괄호 연산자는 객체의 프로퍼티에 접근하는 것과 같다. 그렇기 때문에 문자로 접근하는 것이 가능하다.

```javascript
let alpha = ['A', 'B', 'C', 'D'];
console.log(alpah['2']) // 'C'가 출력된다.
```



### 배열의 원소 추가 및 삭제

- 다음은 배열에 원소를 추가하는 코드이다.
  - 배열의 크기를 벗어난 인덱스를 지정하여 원소를 추가할 수 있다.
  - 또한 `push`를 통해 배열의 끝에 원소를 추가할 수 있다.

```javascript
let arr = [1, 3, 5];
arr[3] = 7;
arr.push(9);
console.log(arr); // [ 1, 3, 5, 7, 9 ]
```



- 다음은 배열의 원소를 삭제하는 코드이다.
  - `delete`를 통해 특정 인덱스의 원소를 삭제할 수 있으며 length가 줄어들지 않고 삭제한 원소의 자리에 `undefined`가 채워진다.
  - `pop`을 통해 배열의 끝에 있는 원소를 삭제할 수 있으며, 이 때는 length가 줄어든다.

```javascript
let arr = [2, 4, 6, 8];
delete arr[1];
console.log(arr); // [2, 'undefined', 6, 8]
arr.pop()
console.log(arr); // [2, 'undefined', 6];
```



### for .. of 와 for ... in

- `for ... of`는 배열 내의 인덱스가 아닌 원소의 값을 읽어온다.

```javascript
let alpha = ['A', 'B', 'C', 'D'];
for(let a of alpha){
  console.log(a);
}
/*
A
B
C
D
*/
```



- `for ... in`은 배열 내의 인덱스를 가져온다.

```javascript
let alpha = ['A', 'B', 'C', 'D'];
for(let i in alpha){
  console.log(i);
}
/*
0
1
2
3
*/
```

