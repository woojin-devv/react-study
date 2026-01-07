import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
function App() {
  return (
    <main>
      <div id="game-container" >
        <ol id="players">
          {/* 
          players 1
          해당 컴포넌트가 화면에 그려질 때마다 그 컴포넌트만의 전용 저장소에 할당
          따라서, Player 1과 Player 2가 각각 독립적인 isEditing 상태를 가짐
          */}
          <Player initialname="Player 1" symbol="X" />

          {/* players 2*/}
          <Player initialname="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>

    </main >
  );
}

export default App
