import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCake, buyCake } from '../redux'


function HookCakeContainer( props) {
  
    const numberOfCake = useSelector(state => state.cake.numberOfCake )
    const dispatch = useDispatch()

  return (
    <div>
           <h1>Number of Cake - {numberOfCake} </h1>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
      <button onClick={() => dispatch(AddCake())}>Buy cake</button>
    </div>
  )
}

export default HookCakeContainer