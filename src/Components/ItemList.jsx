import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ItemList = () => {
const [data, setData] = useState([])
const { id } = useParams()

const fetchData =  () =>{
  const response = fetch('src/data/productos.json')
  console.log(response);
  setData(data)
}

  useEffect(() => {
    try{
      fetchData()
    }
    catch(error){
      console.log(error)
    }

  }, [id])

  return (
    <div>ItemList</div>
  )
}
