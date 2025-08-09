import React, {useState} from 'react'

const ExampleTwo = () => {
    const [randomNumber, setRandomNumber] = useState(() =>
        Math.floor(Math.random() * 100)
    )

    const generateNewRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 100);
        console.log(newNumber)
        setRandomNumber(newNumber)
    }

    return (
        <div>
            <h1>RandomNumber: {randomNumber}</h1>
            <button onClick={generateNewRandomNumber}>Generate new number</button>
        </div>
    )
}
export default ExampleTwo
