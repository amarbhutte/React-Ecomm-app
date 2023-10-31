import React, { createContext, useState } from 'react'
import { useContext } from 'react';
import {Data1} from "../DataProduct";


const contextData =createContext()
  

const CartContext = ({children}) => {
    const [items, setItem1] = useState(Data1)

const [first, setfirst] = useState([])


const addCart = (cartItem)=>{
    setfirst({...first ,cartItem})

  }
  return (
    <contextData.Provider value={{addCart, first,setfirst ,items}}>
{children}
    </contextData.Provider>
  )
}

const Globel=()=>{
    return useContext(contextData)
}

export { CartContext, Globel}