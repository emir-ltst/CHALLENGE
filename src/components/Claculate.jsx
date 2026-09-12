import React from 'react'
import useState from 'react'

const Claculate = () => {
    function Calculutor() {
    const [result, setResult] = useState("")

    function handclick(value){
        setRESULT(result + value)
    }
    }


    const calculate = () =>{
        try {
            setResult(eval(result.toString()))
        } catch (err) {
            setRezult(err)
        }
    }
  return (
    <div>

    </div>
  )
}

export default Claculate