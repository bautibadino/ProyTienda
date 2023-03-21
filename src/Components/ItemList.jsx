import React from 'react'
import { useParams } from 'react-router-dom'

export const ItemList = () => {
    const {id} = useParams()
    return (
    <div>{id}</div>
  )
}
