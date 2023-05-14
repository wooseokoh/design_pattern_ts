Iterator 패턴

```
- Iterator 패턴은 배열이나 Linked-List, Tree 처럼 다른 데이터 구조를 갖는 Aggregator의 구성 항목을 표준화된 공통 API로 접근할 수 있습니다.
- 데이터 구조가 다른 Aggregator일지라도 구성항목을 표준화된 공통 API로 접근할 수 있음으로 하느이 공통된 알고리즘으로 처리할 수 있습니다
```

Strategy 패턴

```
- Strategy 패턴은 어떤 기능에 대한 특정 알고리즘을 느슨하게 결합시켜주는 패턴입니다.
- 어떤 알고리즘이 느슨하게 결합되면 추후 더 나은 알고리즘으로 쉽게 변경할 수 있을 뿐만 아니라 프로그램이 실행 중에 상황에 맞는 알고리즘으로 쉽게 변경할 수 있습니다.
- 또한 기존의 알고리즘을 유지하면서 새로운 알고리즘을 효과적으로 추가할 수 있습니다.
```

Template method 패턴

```
Template method 패턴은 어떤 기능을 구성하는 각 실행 순서를 미리 정하고 각 실행 단계에 대한 구체적인 코드를 재정의할 수 있는 유연성을 제공합니다.
```

Adapter 패턴

```
- Adapter 패턴은 코드를 변경할 수 없는 클래스를 원하는 형태로 사용하고자 할때 적용할수 있는 패턴입니다.

- 클래스의 코드를 변경하기 어려운 경우
1. 처음푸터 코드가 제공되지 안흔 클래스의 경우(컴파일 언어인 경우에 한함)
2. 이미 많은 프로그램에서 사용되는 공용 클래스로써 고용 클래스가 변경되면 영향을 받는 다른 프로그램의 코드가 너무 많이 변경되는 경우
3. 어떤 클래스가 번전업된 경우 하위버전의 클래스도 지원해야 하는 경우
```