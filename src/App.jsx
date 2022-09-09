import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [operate, setOperate] = useState("")
  const [second, setSecond] = useState("")
  const [answer, setAnswer] = useState("")
    
 
  const setNum = (value) => {
    setInput(input + value)
  } 
  
  const clearAll = () => {
    setInput(input.slice(0, -1)) 
  }
   const operateAll = (ev) => {
    setOperate(ev)
    setInput("")
    setSecond(input)
   
  }
  const calculateAll = () => {
    if (operate === "+") {
      setAnswer(Number(input) + Number(second))

      } else if (operate === "-") {
      setAnswer(Number(second) - Number(input))

    }else if (operate === "/") {
      setAnswer(Number(second) / Number(input))
     
    }else if (operate === "×") {
      setAnswer(Number(input) * Number(second))
      
    }else if (operate === "√") {
      setAnswer(Math.sqrt(second))
      
    
    }else if (operate === "÷") {
      setAnswer(Math.sqrt(second))
      
    
    }
  }
  const onIt = () => {
    setAnswer("0")
    setInput("")
    setOperate("")
    setSecond("")
  }
  const offIt = () => {
    setAnswer("")
    setInput("")
    setOperate("")
    setSecond("")
  }


  return (
    <div className="App">
      <div class="calculator">
   <div class="header">
      <div class="window">
         <span class="red"></span>
         <span class="yellow"></span>
         <span class="green"></span>
      </div>
      <div class="input">
            {second + operate + input} 
            <span>{answer}</span>
      </div>
   </div>
   <div class="keys">
      <div class="row">
         <div class="number">
            <span onClick={(e)=>setNum(e.target.innerHTML)}>7</span>
            <span onClick={(e)=>setNum(e.target.innerHTML)}>8</span>
            <span onClick={(e)=>setNum(e.target.innerHTML)}>9</span>
         </div>
         <div class="symbol">
              <span onClick={(e)=>operateAll(e.target.innerHTML)}>÷</span>
              
         </div>
      </div>
      <div class="row">
         <div class="number">
            <span  onClick={(e)=>setNum(e.target.innerHTML)}>9</span>
            <span  onClick={(e)=>setNum(e.target.innerHTML)}>5</span>
            <span  onClick={(e)=>setNum(e.target.innerHTML)}>6</span>
            </div>
            
         <div class="symbol">
            <span onClick={(e)=>operateAll(e.target.innerHTML)}>-</span>
         </div>
          </div>
         
      <div class="row">
         <div class="number">
            <span   onClick={(e)=>setNum(e.target.innerHTML)}>1</span>
            <span   onClick={(e)=>setNum(e.target.innerHTML)}>2</span>
            <span  onClick={(e)=>setNum(e.target.innerHTML)}>3</span>
         </div>
         <div class="symbol">
            <span onClick={(e)=>operateAll(e.target.innerHTML)}>/</span>
         </div>
      </div>
      <div class="row">
         <div class="number">
            <span onClick={onIt} class="dull">ON</span>
            <span   onClick={(e)=>setNum(e.target.innerHTML)} >0</span>
            <span onClick={clearAll}>CE</span>
            </div>
            <div class="symbol">
            <span onClick={(e)=>operateAll(e.target.innerHTML)} >+</span>
           
            </div>
         
            
          </div>
           <div class="row">
         <div class="number">
            <span onClick={(e)=>operateAll(e.target.innerHTML)}>.</span>
            <span onClick={(e)=>operateAll(e.target.innerHTML)}>√</span>
            <span onClick={offIt}>OFF</span>
           
              
            </div>
            <div class="symbol action">
            <span  onClick={calculateAll}>=</span>
           
            </div>
            
         
      </div>
          
   </div>
</div>

      
    </div>
  )
}

export default App
