# Node Create-Insert-Delete

> HTML뿐만 아니라 DOM API를 통해서도 요소를 생성하여 삽입하거나 삭제할 수 있다.



### 노드 생성하기

노드를 새롭게 생성할 때는 다음과 같이 코드를 작성한다. `.createElement()`를 사용하며 괄호 안에 태그의 종류를 문자열 형태로 넣는다. 

```javascript
const div = document.createElement("div");
```

이렇게 생성된 노드의 프로퍼티인 `parentNode`와 `childNode`의 값은 `null`이며 DOM 트리에 아직 구성되지 않았다. 현재까지의 상태는 생성만 한 단계이다.



### 노드 삽입하기

생성된 노드를 삽입하는 것은 DOM 트리 내에 삽입하는 것과 같다. 삽입은 `.appendChild`와 `.insertBefore`를 통해 할 수 있다.

- `.appendChild`는 어떤 요소의 마지막 자식 요소로  삽입한다.

```javascript
ul.appendChild("li");
```

- `.insertBefore`은 지정한 자식 요소 앞에 삽입한다. 아래의 코드처럼 삽입할 노드를 지정한 자식 요소의 앞에 삽입한다.

```javascript
ul.insertBefore("삽입할 노드", "자식 요소");
```

위의 두 가지 메서드를 통해 기존의 요소를 옮기는 것도 가능하다.



### 노드 삭제하기

`.removeChild`를 통해 노드를 삭제할 수 있다. 이를 통해 특정 자식 요소를 삭제할 수 있다.

```javascript
ul.removeChild("li")
```

