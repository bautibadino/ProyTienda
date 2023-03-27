import React from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetail = (item) => {
  const { id } = useParams()
  console.log(item);
  return (
    <div>ItemDetail</div>
  )
}
