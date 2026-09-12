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

            <button>/</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>

            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>

            <button>0</button>
            <button>1</button>
            <button>2</button>
            <button>=</button>

        </section>
    </div>
  )
}

export default Claculate