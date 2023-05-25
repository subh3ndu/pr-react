import { useState } from 'react'

function App() {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    setArr(prev => [...prev, input]);
    setInput("");
  }

  const handleDoubleClick = (i) => {
    setArr(prev => prev.filter((item, ind) => i !== ind))
  }

  return (
    <>
      <form>
        <input 
          type="text" 
          placeholder='name' 
          name="input"
          value={input}
          onChange={handleChange}
        />

        <button onClick={handleClick}>Submit</button>
      </form>

      <ol>{arr.map((item, ind) => (
        <li key={ind} onDoubleClick={(e) => handleDoubleClick(ind)}>{item}</li>
      ))}</ol>
    </>
  )
}

export default App
