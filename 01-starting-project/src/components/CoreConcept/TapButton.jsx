export default function TapButton({ children, onSelect }) {
    // // 컴포넌트 함수 내부에 onClick 핸들러 함수 정의
    // function handleClick() {
    //     console.log('Hello World!');
    // }
    // 바닐라 js로 이벤트 리스너 추가하는 예시
    // document.querySelector('button').addEventListener('click', () => {
    //     console.log(`Button clicked: ${children}`);
    // });
    return (
        <li><button onClick={onSelect}>{children}</button></li>
    );
}