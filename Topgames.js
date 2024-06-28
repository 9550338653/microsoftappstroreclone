import React from 'react'
import './Topgames.css'
import './whole.css'
import {NavLink} from 'react-router-dom';
export default function Topgames() {
  return (
    <>
    
    <div>
      <h1>Top games</h1>
      <li>
          <NavLink to="/seeall" className="game-card-container" >Seeall</NavLink>
        
        </li>
    <div class="game-card-container">
      <div class="game-card">
            <div>
            <NavLink to="/game" className="details" ><img src="data:image/jpeg;base64,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"/></NavLink>
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
             <NavLink to="/game" className="details" ><img src="https://store-images.s-microsoft.com/image/apps.7581.13643678564522369.75e1831f-bbb2-4e38-a0a3-406a99401d19.83656167-13a4-4d77-b418-8b125ed52435?mode=scale&q=90&h=300&w=200"/></NavLink>
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
    <NavLink to="/game" className="details" ><img src="https://store-images.s-microsoft.com/image/apps.40542.13770848073620444.4fccc363-7f51-4078-98b5-68284d2b5b03.369be845-1c28-4058-852f-0595c20ac5a6"/></NavLink>
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
    <NavLink to="/game" className="details" ><img src="https://store-images.s-microsoft.com/image/apps.60119.13917439356089127.8cda566b-4f00-4b62-96ed-1a1685ace4a4.14ecf007-3c02-4b87-bc9b-36af79dbabb3?w=100"/></NavLink>
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
    <NavLink to="/game" className="details" ><img src="https://store-images.s-microsoft.com/image/apps.50516.14164774940562399.28cf5389-377e-4c4d-b36d-bf2c342ac7aa.6ab791a9-bc3e-4bac-9578-ec1f226a12bd?w=100"/></NavLink>
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
    <NavLink to="/game" className="details" ><img src="https://store-images.s-microsoft.com/image/apps.34999.13510798887911126.f4859e40-a097-4c60-aeaa-cbb41adb1d9f.3da65386-b1e0-423c-9fce-4b5f84c86830?w=100"/></NavLink>
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
