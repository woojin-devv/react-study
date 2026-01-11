import {useState} from 'react';

export default function Player() {
  const[enteredName, setEnteredName] = useState('');
  const[submitted, setSubmitted] = useState(false);

  function handleChange(event){
    setEnteredName(event.target.value);
  }

  function handleClick(){
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
