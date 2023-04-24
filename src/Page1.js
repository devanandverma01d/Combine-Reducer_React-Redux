import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Page1 = () => {
    const store = useSelector(store=>store.AddSubRed)
    const dispatch = useDispatch()
  return (
    <>
        <h1>This is Page 1</h1>
        <h1>{store.value}</h1>
        <button type='button' onClick={()=>dispatch({type:"ADD",payload:1})}>Increment</button>
        <button type='button' onClick={()=>dispatch({type:"RESET",payload:0})}>Reset</button>
        <button type='button' onClick={()=>dispatch({type:"SUB",payload:1})}>Decrement</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <Link to='/page2'>Go to Page 2</Link>
        </div>


    </>
  )
}
