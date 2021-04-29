# 배열의 메서드



### 추가 및 삭제

- `arr.push()` : 배열의 맨 끝에 원소를 추가한다.

- `arr.pop()` : 배열의 맨 끝에 있는 원소를 삭제한다.

- `arr.unshift()` : 배열의 맨 앞에 원소를 추가한다.

- `arr.shift()` : 배열의 맨 앞에 있는 원소를 삭제한다.

- `arr.splice(index)` : 배열에서 지정한 index부터 원소를 삭제한다.

  - ```javascript
    let arr = [1, 2, 3, 4, 5]
    arr.splice(2) // arr = [1, 2]
    ```

  - ```javascript
    let arr = [1, 2, 3, 4, 5]
    // arr[2]인 3부터 2개를 삭제
    arr.splice(2, 2) // arr = [1, 2, 5]
    ```

  - ```javascript
    let arr = [2, 3, 5, 7]
    // arr[1]인 3부터 3개를 삭제하고 그 자리를 4, 6, 8로 대체
    arr.splice(1, 3, 4, 6, 8) // arr = [2, 4, 6, 8]
    ```



### 배열의 복사

- `arr.slice(start, end)` : 배열의 start부터 end까지의 원소를 복사한다.

  - ```javascript
    let arr1 = [1, 2, 3, 4, 5]
    // 인덱스 1부터 3까지 복사한다. 
    arr2 = arr1.slice(1, 4) // [2, 3, 4]
    ```

  - ```javascript
    let arr1 = [1, 2, 3, 4, 5]
    // 인덱스 끝인 -1부터 -2까지 복사한다. 
    arr2 = arr1.slice(-2) // [4, 5]
    ```

- `arr.concat()` : 기존 배열의 요소에 새로운 배열을 만들거나 추가한다.

  - ```javascript
    let arr1 = [1, 3, 5]
    let arr2 = [2, 4, 6]
    arr1 = arr1.concat([2, 4, 6]) // arr1 = [1, 3, 5, 2, 4, 6]
    ```



### forEach

`forEach`는 배열 요소 각각에 특정 함수를 실행한다.

```javascript
let arr = [1, 2, 3]
arr.forEach((item, index) => { // 배열의 요소를 꺼내서 2를 곱하여 출력
  console.log(item*2, index)
})
```



### 배열 탐색하기

- `arr.indexOf(item, from)` : 배열에서 from이후부터 item을 탐색하고 찾았다면 인덱스를 반환하고 못 찾았다면 -1을 반환한다.

  - ```javascript
    let arr = [1, 2, 3, 4, 5]
    console.log(arr.indexOf(3)) // 2
    ```

  - ```javascript
    let arr = [1, 2, 3, 4, 5]
    console.log(arr.indexOf(3, 3)) // -1
    ```

- `arr.includes(item, from)` : 배열에서 from이후부터 item이 있는지를 검사하여, 있다면 `true`, 없다면 `false`를 반환한다.

  - ```javascript
    let arr = ['a', 'b', 'c', 'd']
    console.log(arr.includes('b')) // true
    ```

- `filter()` : 조건에 맞는 원소를 담아 배열로 반환한다.

  - ```javascript
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let odd = arr.filter(item => item%2) // 홀수만 담아서 배열로 반환
    console.log(odd)
    ```



### map

`map`은 배열의 전체 원소에 대해 함수를 호출하고 배열로 반환한다.

```javascript
let arr = [1, 2, 3, 4, 5]
let result = arr.map(item => item*2)
console.log(result)
```



### sort

배열의 원소들을 정렬한다. 이때 숫자를 오름차순 또는 내림차순으로 정렬할 때는 숫자가 문자로 비교되기 때문에 원하는대로 정렬이 되지 않을 것이다. 

따라서 특정 조건을 `sort()`내에 포함시켜야 한다. `sort()`는 **퀵 정렬**로 구현되어 있으며 두 개의 값을 비교하여 왼쪽 값이 크면 양수가 나오고 두 숫자의 자리를 변경한다. 그리고 왼쪽 값이 작다면 음수가 나와 두 숫자의 자리를 변경하지 안흔다.

```javascript
let numbers = [4, 2, 6, 1, 7, 3]
console.log(numbers.sort((a, b) => a-b))
```



### split & join

`split`은 특정 문자를 기준으로 나눠서 배열로 반환한다. 문자를 지정하지 않으면 공백을 기준으로 나뉘게 된다.

```javascript
let names = 'kim-lee-choi-park'
let nameList = names.split('-')
console.log(nameList) //[ 'kim', 'lee', 'choi', 'park' ]
```

`join`은 배열 요소를 특정 문자를 포함하여 합치게 된다.

```javascript
let names = 'kim-lee-choi-park'
let nameList = names.split('-')
let nameSplit = nameList.join(' ')
console.log(nameSplit) // kim lee choi park
```



### reduce

`reduce`는 배열의 모든 원소들을 꺼내서 특정 연산을 한 후 반환을 하게된다.

```javascript
let numbers = [1, 3, 5, 7, 9]
// 1, 3, 5, 7, 9를 꺼내어 sum에 저장한다.
let result = numbers.reduce((sum, item) => sum+item)
console.log(result)
```



### 참고

- https://ko.javascript.info/array-methods