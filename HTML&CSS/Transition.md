# Transition



### Intro

`transition`은 CSS의 속성값이 변화할 때, 일정시간에 따라 변화될 수 있도록 설정하는 것이다. `transition`은 기존의 `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`를 모두 포함한 단축 속성이다.

여기서 CSS 속성값이 변화한다는 것은 `:hover`, Javascript로 추가된 이벤트가 발생했을 때를 의미한다. 이와같은 변화가 발생할 때 일정시간에 걸쳐서 변화할 수 있도록 `transition`을 사용할 수 있다.



### transition-property

- `transition` 대상이 되는 CSS 속성을 정의힌다.
- 여러 개의 속성을 정의할 때는 쉼표(, )로 구분한다.
- 모든 CSS 속성이 `transition`을 적용할 수 있는 것은 아니다 (EX. display) 

```css
div{
    width:50px;
    transtition-property: width;
    transition-duration: 1s;
}
div:hover{
    width:200px;
}
```



### transition-duration

- `transition`이 일어나는 지속시간을 의미한다. 
- 단위는 초(s), 밀리초(ms)로 지정할 수 있으며 지정하지 않을 때의 기본값은 0s로 효과가 적용되지 않는다.
- 지속시간이라는 것은 0s에 시작되어 특정 s에 완료된다는 것을 의미한다.
- `transition-property`에서 속성을 쉼표로 여러개 지정했다면 각 위치에 1대1로 대응되어 시간을 지정한다.



### transition-timing-function

- `transition`이 변화할 때 시간에 따라 어떻게 변화할지 지정할 수 있다.
- 지정할 수 있는 속성은 다음과 같다.
  - ease : 기본값이며 느리게 시작하여 점점 빨라졌다가 다시 느려지면서 완료된다.
  - linear : 시작부터 종료까지 같은 속도로 변화한다.
  - ease-in : 느리게 시작한 후 일정한 속도로 변화되어 완료된다.
  - ease-out : 일정한 속도로 변화하다가 점점 느려지면서 완료된다.
  - ease-in-out : 느리게 시작하여 느리게 완료된다.



### transition-delay

- `transition`이 일정 시간 이후에 발생할 수 있도록 한다.