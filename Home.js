import React from 'react'
import Navbar from './Navbar'
import Slideshow from './Slideshow'
import Topgames from './Topgames'
import Freeapp from './Freeapp'
import Esapp from './Esapp'
import Msapp from './Msapp'
import Bsapp from './Bsapp'
import Col from './Col'
import Sidebar from './Sidebar'
export default function Apps() {
  return (
    <div class="container">
      <Navbar/>
      <Sidebar/>
      <h1>Home</h1>
      <Slideshow/>
      <Freeapp/>
      <Topgames/>
      <Esapp/>
      <Msapp/>
      <Bsapp/>
      <Esapp/>
      <Col/>
    </div>
  )
}
