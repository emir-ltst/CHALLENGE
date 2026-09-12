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
            <button></button>
            <button></button>
            <button></button>
            <button></button>

            <button></button>
            <button></button>
            <button></button>
            <button></button>

            <button></button>
            <button></button>
            <button></button>
            <button></button>

            <button></button>
            <button></button>
            <button></button>

        </section>
    </div>
  )
}

export default Claculate