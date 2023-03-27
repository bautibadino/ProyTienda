import React from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetail = () => {
  const { id } = useParams()
  return (
    <div>ItemDetail</div>
  )
}
