import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/Navbar';
import { ItemList } from './Components/ItemList';

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemList greeting="Hi 🌎"/>
    </>
  )
}

export default App;