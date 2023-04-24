import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export const Page2 = () => {
    const store = useSelector(store=>store.MulDivRed);
    console.log(store)
    const dispatch = useDispatch()
  return (
    <>
        <h1>This is Page 2</h1>
        <h1>{store.value}</h1>
        <button type='button' onClick={()=>dispatch({type:"MULBY2",payload:2})}>*2</button>
        <button type='button' onClick={()=>dispatch({type:"MULBY3",payload:3})}>*3</button>
        <button type='button' onClick={()=>dispatch({type:"RESET",payload:10})}>Reset</button>
        <button type='button' onClick={()=>dispatch({type:"DIVBY2",payload:2})}>/2</button>
        <button type='button' onClick={()=>dispatch({type:"DIVBY5",payload:5})}>/5</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <Link to='/'>Go to Page 1</Link>
        </div>
    </>
  )
}
