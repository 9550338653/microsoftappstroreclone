import React from 'react'
import './Topgames.css'
import {NavLink} from 'react-router-dom';
export default function Proapps() {
  return (
    <>
    
    <div>
      <h1>Productivity Apps</h1>
      <li>
          <NavLink to="/seeall" className="game-card-container" >Seeall</NavLink>
        
        </li>
    <div class="game-card-container">
      <div class="game-card">
            <div>
            <NavLink to="/game" className="details" >
                <img src="https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRfpI0qCMmdkqHsRzCOxK8yLhabDHLRitQP8MJGNbGeAnvFGCQxJNFZjvsD2cveznOTkQIq7wVu6FvnDIs21_How--&format=source"/></NavLink>
            </div>
            <div>
                <h2>Slots</h2>
                <p>Entertainment</p>
            </div>
            <div>
                <button>Free</button>
            </div>
        </div>
        
    
       <div class="game-card">
        <div>
             <NavLink to="/game" className="details" >
                <img src="https://store-images.s-microsoft.com/image/apps.6217.14342243069623811.10291b9b-0850-4e04-8dfe-9afad2baff7b.e2b6f208-48d2-4bb9-b893-b934b7e7044c?w=100"/></NavLink>
        </div>
        <div>
            <h2>Rome</h2>
            <p>Entertainment</p>
        </div>
        <div>
            <button>Free</button>
        </div>
    </div>
    

<div class="game-card">
    <div>
        <img src="https://store-images.s-microsoft.com/image/apps.48249.14075264175091512.e6069598-be57-4d96-bc28-bbca35469576.15acb55f-0e71-4ece-a5ac-d02eeefef83f?w=100"/>
    </div>
    <div>
        <h2>Omen</h2>
        <p>Entertainment</p>
    </div>
    <div>
        <button>Free</button>
    </div>
</div>
<div class="game-card">
    <div>
    <NavLink to="/game" className="details" >
        <img src="https://store-images.microsoft.com/image/apps.42295.9007199267194641.4c23fc3c-1a45-452e-9675-bce7c5527d5b.b8d66631-e58a-4bf8-884f-57ade6aee515"/></NavLink>
    </div>
    <div>
        <h2>Gambio</h2>
        <p>Entertainment</p>
    </div>
    <div>
        <button>Free</button>
    </div>
</div>
<div class="game-card">
    <div>
    <NavLink to="/game" className="details" >
        <img src="https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYtI_MIrVq4WfN7M.qN7gV3ayNiQeJK6Uxg366DH3bnRWQkjVGTSWVbdBdfC8SHt.e3LyYf13XCXTRURMyfZ26oVfZiA5O_pvuhdNZX7ub83bel0Gv71Cv.pq4bUyB1EBQ--&format=source"/></NavLink>
    </div>
    <div>
        <h2>King</h2>
        <p>Entertainment</p>
    </div>
    <div>
        <button>Free</button>
    </div>
</div>
<div class="game-card">
    <div>
    <NavLink to="/game" className="details" >
        <img src="https://store-images.s-microsoft.com/image/apps.54891.13780211317357002.ff964487-7a07-4be7-bb38-60113d0d5fd3.2e432731-699d-4d2c-b9e7-73e632ab07b9?w=100"/></NavLink>
    </div>
    <div>
        <h2>Bingo Bitz</h2>
        <p>Entertainment</p>
    </div>
    <div>
        <button>Free</button>
    </div>
</div>
</div>

    </div>
    </>
    
  )
}
