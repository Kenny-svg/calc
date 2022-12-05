import { useState } from "react";
const Calc = () => {
    const [calc, setCalc] = useState("")
    const [result, setResult] = useState("")
    const [clear, setClear] = useState("C");
    const ops = ['/', '*', '+', '-', '.']
    const updateCalc = value => {

        if (
            ops.includes(value) && calc === '' || 
            ops.includes(value) && ops.includes(calc.slice(-1))
        ){
            return;
        }
        setCalc(calc + value);
        if (!ops.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }
    const createDigits = () => {
        const digits = [];


        for (let i = 1; i< 10; i++) {
            digits.push(
                <button
                onClick={() => updateCalc(i.toString())}
                key={i}>
                {i}</button>
            )
        }
        return digits;
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }
    const deleteLast =() => {
        if (calc == '') {
            return
        }

        const value = calc.slice(0, -1);
        setCalc(value)
    }
    const delClear = () => {
        setResult(0)
        setCalc(0)
    }
    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    <span onClick={delClear} className="clear">{clear}</span>
                    {result ? <span>({result})</span> : ''}{calc || "0"}
                </div>
            

            <div className="operators">
                <button onClick={
                    () => updateCalc('/')
                }>/</button>
                <button onClick={
                    () => updateCalc('*')
                }>*</button>
                <button onClick={
                    () => updateCalc('+')
                }>+</button>
                <button onClick={
                    () => updateCalc('-')
                }>-</button>

                <button onClick={deleteLast}>DEL</button>
            </div>
            

            <div className="digits">
                {createDigits() }
                <button>0</button>
                <button onClick={
                    () => updateCalc('.')
                }>.</button>
                <button onClick={calculate}>=</button>
            </div>
        </div>
        </div>
    )
}
export default Calc;