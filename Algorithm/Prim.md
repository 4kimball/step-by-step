# Prim

> 최소 신장 트리를 구하는 알고리즘



### :bulb:개념

- 크루스칼 알고리즘과 마찬가지로 최소 비용을 갖는 신장 트리를 구하는 알고리즘이다.
- 크루스칼 알고리즘은 **간선을 중심으로 선택**했다면 프림 알고리즘은 **노드를 중심으로 선택**하여 최소 신장 트리를 **점진적으로** 완성해 나간다.
  - 출발 노드를 기준으로 인접한 간선 중 최소 비용을 갖는 노드로 간선을 하나씩 그어서 신장트리를 완성한다.
- 특정 노드를 출발점으로 **인접하고 아직 방문하지 않은 노드 중 최소 비용을 갖는 노드로 이동**한다.
  - 순환하지 않는 구조이기 때문에 무작위의 노드를 출발점으로 해도된다.
- **방문한 노드와 인접한 노드 중 비용이 가장 적은 것을 선택하여 이동**
  
- 프림 알고리즘은 `우선순위 큐`를 활용하면 쉽게 구현할 수 있다.
  - `visited` : 0번부터 V번까지 노드에 대한 방문표시를 한다.
  - python에서 우선순위 큐를 `import heapq`를 통해 구현하고 hq에 (비용, 노드) 순으로 넣어서 비용이 가장 작은 것이 먼저 나오도록 한다.

```python
visited = [False] * (V+1)
hq = []
heapq.heappush(hq, (0, 0)) # 비용-노드
```

```python
    while hq:
        # 특정 노드에서 cur_node까지의 비용이 cur_weight가 된다.
        # hq에서 적은 비용을 갖는 node가 pop된다.
        cur_weight, cur_node = heapq.heappop(hq)
		
        # 이미 방문한 노드는 continue
        if visited[cur_node]:
            continue
        visited[cur_node] = True
        # 지금까지 방문한 결과를 result에 더해나간다.
        result += cur_weight
		
        # 현재 노드 중 인접한 노드를 탐색하고
        for next_node, weight in graph[cur_node]:
            # 아직 방문하지 않은 노드에 대해서
            if not visited[next_node]:
                # 힙에 현재 노드와 인접한 노드의 간선 비용과 다음 노드를 넣는다.
                heapq.heappush(hq, (weight, next_node))
```

- 위의 과정을 보면 우선순위 큐에 저장된 노드와 간선의 정보들은 어쨋든 이전까지 방문한 노드와 연결될 수 있고, 그리디적으로 최소비용을 갖는 노드로 이동을 한다.