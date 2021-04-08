# Position

> position 속성을 통해 요소들을 어떻게 배치할지 정하고 `top`, `right`, `bottom`, `left`을 통해 요소를 최종적으로 배치한다.
>
> position 속성의 값은 `static`, `relative`, `absolute`, `fixed`, `sticky`을 지정할 수 있다.



### static

position 속성의 기본값은 static이다. 모든 요소들은 문서의 흐름에 따라 위에서 아래로, 왼쪽에서 오른쪽으로 배치되고 부모 요소 내에 자식 요소로서 존재할 경우 부모 요소의 위치를 기준으로 배치된다.

static의 경우 `top, right, bottm, left`와 함께 사용할  수 없다. 사용하더라도 무시된다.



### relative

relative는 **본래 자신이 있어야할 위치**를 기준으로부터 `top, right, bottom, left`를 통해 특정 위치에 배치할 수 있다. 좌표값을 지정하지 않는다면 static과 같은 효과가 나타난다.



### absolute

문서의 흐름에서 제외시키고 **부모 요소 또는 가장 가까이 있는 조상요소(static 제외)**를 기준으로 `top, right, bottom, left`를 통해 특정 위치에 배치할 수 있다.  relatvie, aboslute, fixed 프로퍼티가 선언되어 있는 부모 또는 조상 요소를 기준으로 위치가 결정되고, **부모 또는 조상 요소가 static인 경우**, body를 기준으로 위치한다.



### fixed

문서의 흐름에서 제외시키고 부모 요소와 관계없이 브라우저의 **viewport**를 기준으로 위치시킨다. 하지만 요소의 조상 중 하나가 `transform`, `perspective`, `filter` 속성 중 어느 하나라도 값이 지정되어 있다면 **viewport 대신 해당 조상이 기준이 된다.**

fixed는 `block`요소의 `width`를 content에 맞게 변화시킨다.



### sticky

요소를 문서의 흐름에 따라 배치시키고 스크롤을 하더라도 항상 그 위치에 있도록 한다.