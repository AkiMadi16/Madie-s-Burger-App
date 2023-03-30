import { useState } from 'react'

function Home(props) {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="Home">
      <h1>Welcome {props.name} to my Burger App</h1>
      <p>Counter: {counter}</p>
      <button onClick={increaseCounter}>Count</button>
    </div>
  )
}

export default Home