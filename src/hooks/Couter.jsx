import useCounter from "./CounterCustom"

export default function Couter() {
    const [value,increment,decrement,reset]=useCounter(0)
    
    return(
         <>
         <h6>{value}</h6>
         <button className="btn-primary bg-primary" onClick={()=>increment()}>Increment</button>
         <button className="btn-danger" onClick={()=>decrement()}>Decrement</button>
         <button className="btn-warning" onClick={()=>reset()}>Reset</button>
         </>
    )
}