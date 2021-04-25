# Read & Write

> 자바스크립트를 활용해서 HTML 요소 안의 내용을 읽고 쓸 수 있다.



### innerHTML

- `innerHTML`은 HTML 요소의 내용을 읽고 쓸 수 있는 프로퍼티이다.
- 이를 활용하여 간단한 스톱워치를 만들어보자.
- HTML에는 시간을 `초`를 출력하는 태그와 시작과 종료를 의미하는 버튼이 존재한다.

```html
<h3 class="display">0.00</h3>
<button class="start">start</button>
<button class="stop">stop</button>
```

- 자바스크립트에서 HTML 요소를 불러와 변수로 저장한다.

```javascript
const display = document.querySelector(".display");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
```

- 초기에 start 버튼을 클릭했을 때 start 함수가 실행되도록 설정한다.

```javascript
function init(){
    startBtn.onclick = start;
}
init();
```

- start 버튼을 누르면 버튼을 누른 시점과 갱신되는 시간의 차이를 `<h3>`에 쓴다.

```javascript
function start(){
    startBtn.onclick = null;
    stopBtn.onclick = stop;

    startTime = new Date();
    timer = setInterval(function(){
        let now = new Date();
        // 버튼을 누른 시점과 10ms마다 갱신되는 시간의 차이를 h3에 출력한다.
        display.innerHTML = ((now - startTime)/1000).toFixed(2);
    }, 10);
}
```

- stop 버튼을 누르면 timer를 초기화하고 start 버튼을 다시 활성화시킨다.

```javascript
function stop(){
    clearInterval(timer);
    startBtn.onclick = start;
}
```



### form 요소의 값 읽기

- 사용자가 폼 컨트롤 요소에 값을 입력하면 해당 값을 읽어서 사용할 수 있다.
- `input`태그의 속성이
  - number, text인 경우 **value**라는 프로퍼티를 통해 값을 문자열로 읽어온다.
  - checkbox, radio인 경우 **checked**라는 프로퍼티를 통해 선택 여부를 boolean으로 읽어온다.
- `textarea` 태그는 **value** 프로퍼티로 입력된 값을 문자열로 읽어온다.
- 국어, 영어, 수학 점수를 입력하여 평균에 따른 평점을 출력해보자.
- 국어, 영어, 수학 점수를 입력하고 계산버튼을 누르면 `.result`에 평점을 출력한다.

```html
  <div>
    국어:
    <input type="number" class="korean">
  </div>
  <div>
    영어:
    <input type="number" class="english">
  </div>
  <div>
    수학:
    <input type="number" class="math">
  </div>
  <div class="result">평점</div>
  <button class="btn">계산</button>
```

- HTML 요소를 불러와 변수로 저장하고 계산 버튼을 클릭했을 때 이벤트 처리를 한다.

```javascript
const koScore = document.querySelector(".korean");
const engScore = document.querySelector(".english");
const mathScore = document.querySelector(".math");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
button.addEventListener("click", handleResult);
```

- 점수를 입력했을 때 빈 칸이 있거나 0점 미만, 100점을 초과하는 점수를 입력했을 때 다시 입력하도록 알림창을 띄운다.

```javascript
    function checkInput(score){
      if(score === ""){
        alert("점수를 입력하세요");
        return false;
      }
      else if(Number(score) < 0 || Number(score) > 100){
        alert("0점에서 100점까지의 점수만 입력할 수 있습니다.");
        return false;
      }
      return true;
    }
```

- `checkInput`으로 세 개의 입력이 모두 `true`일 때 점수를 계산한다.
- 세 과목의 평균에 따라 A, B, C, D, F 중 하나의 평점을 매긴다.

```javascript
function handleResult() {
    if(checkInput(koScore.value) && checkInput(engScore.value) && checkInput(mathScore.value)){
        const total = Number(koScore.value) + Number(engScore.value) + Number(mathScore.value);
        const avg = total / 3;

        if(avg >= 90){
            result.innerText += " A";
        }
        else if(avg >= 80 && avg < 90){
            result.innerText += " B";
        }
        else if(avg >= 70 && avg < 80){
            result.innerText += " C";
        }
        else if(avg >=50 && avg < 70){
            result.innerText += " D";
        }
        else{
            result.innerText += " F";
        }
    }
}
```

