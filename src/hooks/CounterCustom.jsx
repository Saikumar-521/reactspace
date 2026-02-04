import { useState } from "react"

export default function useCounter(intialvalue=0){
    const [value,setvalue]=useState(0)

    const increment=()=>setvalue(pre=>pre+1)
    const decrement=()=>setvalue(pre=>pre-1)
    const reset=()=>setvalue(intialvalue)
    return[value,increment,decrement,reset]
}