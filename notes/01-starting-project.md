# 41. How React Handles Components & How It Builds A “Component Tree”

> **React 렌더링 전체 흐름 요약**
> 
> 1. 브라우저가 `index.html` 로드
> 2. `index.jsx`  실행
> 3. `createRoot` 로 root div 연결
> 4. `render(<App />)` 호출
> 5. App → Header → 하위 컴포넌트 실행 
> 6. 모든 JSX 분석
> 7. 최종 HTML DOM 생성
> 8. 화면에 렌더
> 
> ⇒ ***React는 컴포넌트 트리를 실행·분석해서 최종 HTML DOM을 만들고, 그 결과만 브라우저에 렌더링한다***
> 

# 43. Setting HTML Attributes Dynamically & Loading Image Files

## 43.1 기존 방식의 문제점

> HTML 태그의 `src="assets/image.png"` 처럼 문자열로 경로를 직접 작성하는 방식은 다음과 같은 위험이 존재함
> 
> - 파일 유실 : 프로젝트를 배포(deployment)하기 위해 Build하는 과정에서 해당 이미지 파일의 무결성이 깨질 수 있음
> - 최적화 부재 : 빌드 도구가 제공하는 이미지 최적화 기능 활용 불가

```jsx
function Header() {
  return (
    <header>
	    //해당 방식을 바꾸는게 좋음.
      **<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />**
      <h1>React Essentials</h1>
      <p>{reactDescription.length}</p>
      <p>
        {reactDescription[genRandomInt(reactDescription.length)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
```

## 43.2 권장 방식 : Import 구분 활용

> 이미지 파일을 JavaScript 변수처럼 Import해서 사용하는 방식이 권장됨.
> 
> - 방법 : `import reactImg from './assets/react-core-concepts.png';`
> - 장점:

# 44.  Props

### Props란?

> 컴포넌트에 전달하는 **입력 데이터(Parameters)**
> 
> - 목적 : 동일한 컴포넌트를 사용하더라도, 상황에 따라 서로 다른 데이터를 출력하여 **재사용성을 극대화**하기 위함.
> - 일반 자바스크립트 함수에 인수를 전달하여 호출

# 45. Props 실전

### 1. 외부 데이터(data.js) 가져오기

> 데이터를 컴포넌트 내부에 하드코딩하지 않고, 별도의 파일에서 관리
> 
> 
> → 유지보수 용이
> 

```jsx
import { CORE_CONCEPTS } from './data.js';
// 예시: 첫 번째 데이터 접근 
// CORE_CONCEPTS[0].title, CORE_CONCEPTS[0].image ...
```

### 2. 효율적인 Props 전달 (Spread 연산자)

> 객체의 속성명과 컴포넌트의 Prop의 이름이 같을 때, 자바스크립트의 Spread 연산자를 활용하여 코드를 줄일 수 있음
> 

**기존 방식 (Longer version)**

```jsx
<CoreConcept 
  title={CORE_CONCEPTS[0].title} 
  description={CORE_CONCEPTS[0].description} 
  image={CORE_CONCEPTS[0].image} 
/>
```

**최적화 방식 (Spread Operator)**

```jsx
<CoreConcept {...CORE_CONCEPTS[0]} />
```

### **3. 컴포넌트 내부 최적화 (객체 구조 분해 할당)**

> 함수 매개변수에서 직접 객체의 속성을 추출하여 `props.something`이라고 반복해서 쓸 필요 없음
> 

**기존 방식**

```jsx
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
```

**구조 분해 할당 방식 (Destructuring)**

```jsx
// 첫 번째 인자인 props 객체에서 바로 속성을 뽑아냄
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```

# 46. Props 활용 심화

### 1. 단일 객체로 Props 전달하기 (Passing a Single Prop Object)

> 데이터가 이미 객체 형태로 정리되어 있으면, 개별 속성으로 쪼개지 않고 객체 통째로 하나의 Prop에 담아 전달할 수 있음.
> 

# 47. Best Practice: 컴포넌트 파일 분리 및 모듈화

### 1. Component 분리 필요성

- **유지보수성**:  프로젝트가 커지면 한 파일에 수백 줄의 코드가 생겨 관리가 어려워짐
- **재사용성**: 컴포넌트를 별도 파일로 만들면 다른 프로젝트나 다른 페이지에서도 쉽게 불러와 쓸 수 있음.
- **가독성**: 파일 이름만 보고도 어떤 역할을 하는 컴포넌트인지 한눈에 알 수 있음

### 2. 컴포넌트 분리 단계 (Step-by-Step)

> 일반적으로 `src` 폴더 안에 `components` 라는 서브 폴더를 만들어 관리 함
> 
- 예: `src/components/Header.jsx` , `src/components/CoreConcept.jsx`

```jsx
 choiwoojin  ~/2026/react-study/01-starting-project   main ±  tree src
src
├── App.jsx
├── components
│   └── **Header.jsx //보통 함수명과 동일하게 생성**
├── data.js
├── index.css
└── index.jsx
```

# 48. CSS 스타일 분리 및 컴포넌트 폴더 구조화

### 1. 컴포넌트 전용 CSS 파일 분리

> 컴포넌트의 스타일을 별도의 CSS 파일로 관리하면 코드를 찾기 쉽고 수정하기 편리함
> 

```jsx
src/components
├── CoreConcept.jsx
├── Header.css
└── **Header.jsx**
```

 

# 49. Component Composition

## 1. Children Prop이란?

> `children` 은 컴포넌트의 여는 태그와 닫는 태그 그 사이에 있는 내용을 전달받는 특별한 Prop
> 
- **사용 예시 (부모)**

```jsx
// 속성 방식이 아닌, HTML 태그처럼 사이에 내용을 넣음
<TabButton>Components</TabButton>
```

- **자식 (Modal Component)**

```jsx
// 구조 분해 할당으로 children을 받음
export default function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
```

# 50. 이벤트 핸들링

> 보통 컴포넌트 함수 **내부**에 중첩 함수로 정의
> 

```jsx
// TabButton.jsx
export default function TabButton({ children }) {
  // 1. 함수 내부에서 핸들러 정의 (관례상 handle... 이름 사용)
  function handleClick() {
    console.log('Hello World!');
  }

  return (
    <li>
      {/* 2. onClick 속성에 함수를 값으로 전달 */}
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
```

- 주의사항 : 함수를 호출하면 안됨, 전달해야함
    - `onClick={handleClick()}` : 렌더링되자마자 실행되어버림
    - `onClick={handleClick}` : 클릭했을 때 리액트가 대신 실행시켜줌

# 51. Passing Functions as Values to props

```jsx
// App.jsx
function App() {
  function handleSelect() {
    console.log('Hello World - selected!');
  }

  return (
    <menu>
      {/* onSelect라는 이름의 Prop으로 함수를 전달함 */}
      <TabButton onSelect={handleSelect}>Components</TabButton>
    </menu>
  );
}
```

```jsx
// TabButton.jsx
// 'onSelect'라는 이름으로 Prop을 받아옴
export default function TabButton({ children, onSelect }) {
  return (
    <li>
      {/* 실제 내장 버튼의 onClick에 부모에게 받은 함수를 연결(Forwarding) */}
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
```

# 52. Passing Custom Arguments to Event Functions

> 모든 `TabButton`이 동일한 `handleSelect` 함수를 호출한다면, 현재 어떤 버튼(Components, JSX 등)이 클릭되었는지 구분할 수 없음
> 

### 따라서,

### 화살표 함수(Arrow Function) 활용

> **함수를 실행하는 새로운 익명 함수**를 전달하여 인자를 제어
> 

# 53. How NOT to update the UI

> State(상태)관리가 중요한 이유
> 
> - 리액트는 컴포넌트 함수를 초기 렌더링 시에 실행하고 나면, 다시 실행하지 않음.
> - 결과 : UI Update가 안됨.

### UI 업데이트의 조건 → Re-rendering

> “데이터가 바뀌었으니 이 컴포넌트 함수를 다시 실행해서 JSX를 새로 그려줘" 라고 알려줘야 함
> 
- **데이터 변경**: 특정 값이 바뀜.
- **재호출**: 리액트가 해당 컴포넌트 함수를 다시 실행.
- **비교(Diffing)**: 새로운 JSX와 이전의 UI를 비교.
- **반영**: 바뀐 부분만 실제 브라우저 DOM에 업데이트.

# 54. Managing State & Using Hooks

> **State란?**
> 
> - 리액트에 의해 관리되는 특별한 변수
> - 값이 변경되면 리액트에게 컴포넌트 함수를 다시 실행(Re-execute)하고 UI를 업데이트 해달라고 신호를 보냄

### useState 사용법

```jsx
import { useState } from 'react'; // 1. 반드시 임포트 필요

function App() {
  // 2. [현재 상태값, 상태를 변경할 함수] = useState(초기값);
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton); // 3. 이 함수를 통해 값을 변경
  }
}
```

### Hook 사용시 제약 사항

1. **컴포넌트 함수 내부에서만 호출** 
2. **최상위(Top Level)에서만 호출** : `if` 문, `for` 문, 또는 중첩된 함수 내부에서 호출하면 안 됨 
    
    → 반드시 컴포넌트 함수 **가장 바깥쪽 코드에 위치**해야함
    

# 55. Dynamic Data Fetching

### 1. 데이터 구조 파악(`data.js`)

> `EXAMPLES` 객체는 버튼 클릭 시 전달하는 식별자 (`components`, `jsx`, `props`, `state`)를 키(key)로 가지고 있음.
> 

```jsx
export const EXAMPLES = {
  components: {
    title: 'Components',
    description: '...',
    code: '...'
  },
  // ... jsx, props, state 데이터들
};
```

### 2. 동적 속성 접근(Square Brackets Syntax)

> 자바스크립트에서 객체의 프로퍼티에 접근할 때, 키가 변수에 담겨있다면 점(`.`) 대신 대괄호(`[]`)를 사용해야 함
> 
- **고정 접근**: `EXAMPLES.components.title`
- **동적 접근**: `EXAMPLES[selectedTopic].title` (여기서 `selectedTopic`은 현재 State 값)

# 56. Conditional Rendering

### 1. 삼항 연산자(Ternary Operator) 활용

> 가장 직관적인 방법 → `조건 ? 참일 때 : 거짓일 때` 문법 사용
> 

```jsx
{ !selectedTopic ? (
    <p>Please select a topic.</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
    </div>
  )
}
```

### 2. 논리 연산자 `&&` (Short-Circuit) 활용

> 특정 조건이 참일 때만 무언가 렌더링하고 싶을 때 사용하는 짧은 문법
> 

```jsx
{ !selectedTopic && <p>Please select a topic.</p> }
{ selectedTopic && (
    <div id="tab-content">
      {/* ...내용... */}
    </div>
  )
}
```

# 57. CSS Styling && Dynamic Styling

> 사용자에게 현재 어떤 탭이 선택 되었는 지 시각적으로 알려주는 동적 스타일링
> 

### 1. `class` 대신 `className`

> 리액트(JSX)에서는 HTML의 `class` 속성 대신 `className` 속성을 사용합니다.
> 
- 이유: 자바스크립트에서는 `class` 는 예악어이기 때문에, 혼동을 피하기 위해서는 `className` 이라는 명칭 사용

### 2. 조건부 클래스 부여 로직(TabButton.jsx)

> 삼항 연산자를 사용하여 특정 조건이 참일 때만 클래스명 부여
> 

```jsx
// TabButton.jsx
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button 
        className={isSelected ? 'active' : undefined} 
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
```