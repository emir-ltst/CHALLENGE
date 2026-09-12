import React from 'react'
import useState from 'react'

const Claculate = () => {
    function Calculutor() {
    const [result, setResult] = useState("")

    function handclick(value){
        setResult(result + value)
    }
    }


    const calculate = () =>{
        try {
            setResult(eval(result.toString()))
        } catch (err) {
            setRezult(err)
        }
    }

    const clear= ()=>{
        setResult("")
    }
  return (
    <div className="calculator">
        <input type="text"
        value={result}
        readonly
        />

        <section className="btn">
            <button onClick={clear}>C</button>
            <button onClick={()=> handclick("-")}>-</button>
            <button onClick={()=> handclick("+")}>+</button>
            <button onClick={()=> handclick("*")}>*</button>

            <button onClick={()=> handclick("/")}>/</button>
            <button onClick={()=> handclick("7")}>7</button>
            <button onClick={()=> handclick("8")}>8</button>
            <button onClick={()=> handclick("9")}>9</button>

            <button onClick={()=> handclick("3")}>3</button>
            <button onClick={()=> handclick("4")}>4</button>
            <button onClick={()=> handclick("5")}>5</button>
            <button onClick={()=> handclick("6")}>6</button>

            <button>0</button>
            <button>1</button>
            <button>2</button>
            <button>=</button>

        </section>
    </div>
  )
}

export default Claculate