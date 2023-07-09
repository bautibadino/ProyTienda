import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer'>
        <p>© 2021 - Todos los derechos reservados</p>
        <p className=''>developed by <Link className='' to={'https://www.linkedin.com/in/bautista-badino/'}>Bautista Badino</Link></p>
    </div>
  )
}
