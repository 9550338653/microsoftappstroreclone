import React from 'react'
import Navbar from './Navbar'
import Slideshow from './Slideshow'

import Freeapp from './Freeapp'
import Esapp from './Esapp'
import Msapp from './Msapp'
import Bsapp from './Bsapp'
import Col from './Col'
import Sidebar from './Sidebar'
import Appses from './Appses'
import Appstop from './Appstop'
import Proapps from './Proapps'
import Creapp from './Creapp'
import Utapps from './Utapps'
import Trendapps from './Trendapps'
export default function Apps() {
  return (
    <div class="container">
      <Navbar/>
      <Sidebar/>
      <h1>Apps</h1>
      <Slideshow/>
      <Freeapp/>
      <Appstop/>
      <Appses/>
      <Proapps/>
      <Creapp/>
      <Utapps/>
      <Trendapps/>
      
      <Col/>
    </div>
  )
}
