import { useState } from 'react';

export default function Player({ initialname, symbol }) {
    //사용자가 'Edit' 버튼을 눌렀는지 여부를 추적하기 위해 Boolean 타입의 State를 생성
    const [isEditing, setIsEditing] = useState(false);

    //사용자가 playerName을 편집할 수 있도록 state생성
    const [playerName, setPlayerName] = useState(initialname);

    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    function handleEditClick() {
        setIsEditing(prev => !prev);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }
    return (
        <li>
            <span className="player">
                {/* 1. {playerName} 대신 변수명을 넣어야 input과 span이 교체됩니다 */}
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}