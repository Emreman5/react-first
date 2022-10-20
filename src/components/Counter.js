import React, { useState } from 'react'

export default function Counter() {
const [number, setNumber] = useState(0);
const handleIncrease = () => {if(number === 10) {setNumber(0)} else{setNumber(number + 1)}};
const handleDecrease = () => {if(number === 0){setNumber(0)} else{setNumber(number - 1)}};

  return (
    <div>
    <h1>{number}</h1>
    <button onClick={handleIncrease}> Increase</button>
    <button onClick={handleDecrease}> Decrease</button>
    </div>
  )
}
