# Greedy

> "현재 가장 최적인 것을 선택한다. 이후에 어떻게되든 상관없다."



### 개념

그리디 알고리즘은 당장 눈 앞에 보이는 것 중에 가장 최적을 선택하여 최종적인 해를 구한다. 여기서 거스름돈을 예로 들어보자. 

**문제 : 어떠한 손님에게 740원을 거슬러줘야 한다. 이때 가장 적은 개수의 동전을 주는 경우의 동전 개수를 구하자.**

- 먼저 문제에서 동전의 개수를 최소로하는 거슬러 주기위해 최적의 선택을 해야한다는 것을 알 수 있다.
- 10원, 50원, 100원, 500원 짜리의 동전이 있을 때 740원을 만들 수 있는 경우의 수는 다양하다. 하지만 여기서 주목해야하는 것은 **최소**를 구해야한다.
- 최소를 구하기위해 당장 눈 앞에 보이는 것 중에 최적의 선택을 해보자. 동전들이 나열 되어있을 때 500원을 거슬러 주고 100원 -> 100원 -> 10원짜리 네 개.
- 위의 과정에서 손님에게 동전을 하나씩 거슬러 줄 때 가치가 큰 동전부터 주는 것을 알 수 있고 이를 **그리디**라고 한다.

그리디 알고리즘은 지금 선택하는 것이 최종적으로 가장 최적의 해를 구한다는 보장이 있어야한다. 



### 그리디 알고리즘을 적용할 수 있는 조건

그리디 알고리즘을 적용할 수 있는 문제는 제한적이다. 알고리즘 문제를 해결하는 것은 근사해를 구하는 것이 아니기 때문에 항상 정확한 해를 구해야한다. 따라서 그리디 알고리즘을 적용할 수 있는 조건을 알아본다.

그리디 알고리즘은 **탐욕적 선택 속성을 갖고 있는 최적 부분 구조**를 갖는 문제에 적용할 수 있다.

- **탐욕적 선택 속성**

탐욕적 선택 속성은 현재의 선택이 이후의 선택에 영향을 주지 않는다는 것을 의미하며 현재의 선택이 항상 최적해의 과정에 포함되어있다. 위의 거스름돈 예시 문제에서 탐욕적 선택 속성이 성립한다는 의미는 다음과 같다.

`가치가 가장 높은 동전을 포함하는 최적해가 반드시 존재한다.` 즉, 최적해를 구하기위해 작은 문제들로 나눠서 해결해나갈 때 작은 문제에서 선택한 해가 최종적인 해에 반드시 포함되는 것이다.



- **최적 부분 구조**

위에서 작은 문제에서 최적의 선택을 했다고해서 그리디로 풀 수 있다는 것을 확신할 수 없다. 결국 최종적인 문제의 해에 도달할 수 있어야한다. 

따라서 부분 문제의 최적해에서 전체 문제의 최적해를 만들 수 있다는 것을 증명할 수 있어야한다. 다시 거스름돈 예시 문제를 보자.

처음에 500원 동전을 선택하고 240원이 남아있다고 하면 100원과 50원, 10원을 선택할 수 있게되고 여기서 100원을 선택해야만 문제의 최종해가 되는 것을 확인할 수 있다. 이처럼 어떠한 선택의 기준을 부분 문제에서도 적용했을 때 최적해가 되는 것을 확인한다.