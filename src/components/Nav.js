import React from 'react'
import Troll from '../images/troll.png'

export default function Nav(){
    return(
        <nav className='navbar'>
            <div className='navbar--brand'>
                <img src={Troll} alt='troll' ></img>
                <h1>Meme Generator</h1>
            </div>

           
        </nav>
    )
}