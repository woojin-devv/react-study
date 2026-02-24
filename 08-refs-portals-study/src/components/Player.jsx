import {useState, useRef} from 'react';

export default function Player() {
  const playerName = useRef();
  const[enteredName, setEnteredName] = useState('');
  const[submitted, setSubmitted] = useState(false);

  function handleChange(event){
    // setEnteredName(event.target.value);
    setEnteredName(playerName.current.value);
  }

  function handleClick(){
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredName : 'unknown entity'}</h2>
      <p>
        {/* <input type="text" onChange={handleChange} value={enteredName}/> */}
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
