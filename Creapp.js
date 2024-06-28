import React from 'react'
import './Topgames.css'
import {NavLink} from 'react-router-dom';
export default function Creapp() {
  return (
    <>
    
    <div>
      <h1>Creativity Apps</h1>
      <li>
          <NavLink to="/seeall" className="game-card-container" >Seeall</NavLink>
        
        </li>
    <div class="game-card-container">
      <div class="game-card">
            <div>
            <NavLink to="/game" className="details" >
                <img src="https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYtI_MIrVq4WfN7M.qN7gV3ayNiQeJK6Uxg366DH3bnRI6x8OQQgqsOKTKVWIyxVMFYEBsngB2TQhLK5cpRi4vUSZxh51NCYRf21HAMSvGp1MuHWq_YKxP3jwFIA4sRUYg--&format=source"/></NavLink>
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
                <img src="https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYtI_MIrVq4WfN7M.qN7gV3ayNiQeJK6Uxg366DH3bnRDKIs0FZaXheexReEMzp9a9qonCfFxm8aWPvR43Yajj5Ehpx356bfdBHxMSRx4To36okaJI4BNRhOPAmu81QLSg--&format=source"/></NavLink>
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
        <img src="https://store-images.s-microsoft.com/image/apps.58009.13742359915875712.e5c258a1-e90a-4f82-9d8c-76d7c5bd3b6e.be2a6c26-b522-4e1b-9ecd-46599288a073?w=100"/>
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
        <img src="https://store-images.s-microsoft.com/image/apps.36918.14223501945663449.4523ce9e-7413-4325-897c-1d129a8847b9.e3a1c1f1-f88f-43ff-895f-cd67c9aedc2d?w=100"/></NavLink>
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
        <img src="https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRSVJshkdVZTl6l0pnZnV.e_ifNiGB2ayuLFlV5KeAMt2Pw8PH8NwNXJpInN07dLHvAaXzWojVK7Lv_7jQeA194g--&format=source"/></NavLink>
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
        <img src="https://store-images.s-microsoft.com/image/apps.42730.14496148542539909.2ac49e35-0633-49de-98bf-73b42d32c779.6a090f1c-ef5e-4042-a022-c4a0d2148e2e?w=100"/></NavLink>
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
