import { useEffect, useState } from "react"

export const useLocalstorage=()=>{

    let userData=JSON.parse(localStorage.getItem('userdata')) || []

    let [udata,setdata]=useState([])

    // adding data  into localstorage

    useEffect(()=>{
        setdata(userData)
    },[])

    return(
        <>
        </>
    )
}