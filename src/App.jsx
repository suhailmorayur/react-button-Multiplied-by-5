
import './App.css'
import { useState } from 'react';
function App() {
  
  const [number, setNumber] = useState(1)



  function multiplyByFive (){
    setNumber(number * 5)
  }

  return (
    <>
     <header></header>
     <main>
     <h1 className='heading'>Every time the button clicks, the number in h1 gets multiplied by 5</h1>
      <div className='div1'>
        
      <h1 className='number'> {number}</h1>
      <button className='count' onClick={multiplyByFive}>Button</button>
      </div>
     </main>
     <footer></footer>
    </>
  )
}

export default App
