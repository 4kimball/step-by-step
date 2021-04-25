# Event

> 기본적으로 웹 브라우저에서 동작하는 프로그램은 **이벤트 주도형 프로그램**이다. 이벤트는 사용자가 버튼을 클릭하거나 커서를 움직이는 등의 행위를 말한다.



### 이벤트 처리기

웹 브라우저에서 이벤트가 발생하는 것을 기다렸다가 이벤트가 발생했을 때 미리 등록된 함수를 실행시킨다. 함수를 이벤트 처리기로 등록하는 방법은 세 가지가 있다.

- **HTML 요소의 속성에 등록하기**
- **DOM 요소의 프로퍼티에 등록하기**
- **addEventListener 메서드 활용하기**



#### :one: HTML 요소의 속성에 이벤트 등록

- 버튼을 클릭한 이벤트가 발생했을 때 버튼의 색깔이 변경되도록 해보자.
- 먼저 `<button>`에 `onclick`이라는 속성을 추가한다.
  - 그리고 `onclick`에 **changeColor()**이라는 함수를 등록한다.

```html
<button class="btn" onclick="changeColor()">Click Me</button>
```

- 자바스크립트에서 **changeColor()**함수 정의하기
  - 먼저 버튼을 클래스명으로 불러와 `button`이라는 변수에 저장하였다.
  - 초기에 버튼의 색깔은 파란색, 글자는 흰색으로 지정한다.
  - 이후 버튼을 클릭했을 때 파란색이면 빨간색으로, 빨간색이면 파란색으로 변경하도록 하였다.

```javascript
    const button = document.querySelector(".btn");
	
	// 버튼을 클릭했을 때 실행되는 함수
    function changeColor(){
      const currentColor = button.style.backgroundColor;
      if(currentColor === "blue"){
        button.style.backgroundColor = "red";
      } else {
        button.style.backgroundColor = "blue";
      }
    }

	// 버튼의 초기 스타일을 정의
    function init(){
      button.style.color = "white";
      button.style.backgroundColor = "blue";
    }
    init();
```

- HTML 요소에 이벤트 처리기를 등록하면 **HTML 코드와 자바스크립트 코드가 섞여서 복잡해진다는 단점**이 존재한다.
- `onclick`이외에도 `onkeyup`, `onsubmit`, `onmouseover` 등 여러가지의 이벤트 처리기가 존재한다.



#### :two: DOM 요소의 프로퍼티에 이벤트 등록

- 위와 같이 버튼을 클릭했을 때 색이 변경되도록 해보자.
- HTML 요소의 속성에 등록한 대신에 자바스크립트 코드에서 이벤트 처리기를 등록한다.
- 아래처럼 버튼을 불러와 `button`변수에 저장하고 변수의 프로퍼티에 `onclick`를 추가한다.
- `button.onclick`에 **changeColor** 함수를 등록하여 클릭했을 때 해당 함수가 실행되도록 하였다.

```javascript
const button = document.querySelector(".btn");
function init(){
    button.style.color = "white";
    button.style.backgroundColor = "blue";
    button.onclick = changeColor;
}
init();
```

- 이벤트 처리기를 DOM에 등록하면 **HTML 코드와 자바스크립트 코드를 분리**할 수 있어 **가독성**과 **유지 보수**가 쉬워진다.
- 위에서 `onclick`에 등록한 이벤트 함수를 제거하기위해서 `null`값을 대입하면 된다. 아직 이벤트 처리기가 등록되지 않았을 때는 `null`값이 저장되어있기 때문이다.



#### :three: addEventListener 메서드 활용하기

- addEventListener를 활용하면 지정한 이벤트가 행해질 때마다 정의한 함수를 호출하여 실행한다.
- `button`에 HTML 요소를 불러와 저장을 한 후에, button에 addEventListener를 지정하고 `click`이라는 속성을 정의하면 버튼을 클릭할 때마다 changeColor 함수가 실행된다.

```javascript
const button = document.querySelector(".btn");
button.addEventListener("click", changeColor);
```

