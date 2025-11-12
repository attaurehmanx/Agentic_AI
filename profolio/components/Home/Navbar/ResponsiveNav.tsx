'use client'
import { useState } from 'react'
import Nav from './Nav'
import Mobilenav from './Mobilenav'

const ResponsiveNav = () => {

  const [shownav, setshownav] = useState(false)

  const openNav = () => {
    setshownav(true)
  }
  const closeNav = () => {
    setshownav(false)
  }

  return (
    <div className=''>
      <Nav openNav={openNav} />
      <Mobilenav closeNav={closeNav} shownav={shownav} />
    </div>
  )
}

export default ResponsiveNav
