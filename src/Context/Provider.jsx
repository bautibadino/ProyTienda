import React from 'react'
import { Context } from './Context'

export const Provider = ({children}) => {

  return (
    <Context.Provider> {children} </Context.Provider>
  )
}
