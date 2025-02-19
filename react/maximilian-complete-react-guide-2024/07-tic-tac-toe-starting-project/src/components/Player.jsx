import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    
    const [playerName, setPlayerName ] = useState(initialName);

    const [ isEditing, setIsEditing ] = useState(false);

    function switchEditMode() {
        setIsEditing(editingMode => !editingMode);
        if(isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>    
            <span className="player">
                {isEditing ? 
                 <input value={playerName} onChange={handleChange} required/> 
                 : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span> 

            <button onClick={switchEditMode}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}