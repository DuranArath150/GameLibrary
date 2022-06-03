import React, { createContext } from 'react'
import Card from './Card.js';
import sekiro from '../../images/sekiro.jpg'
import metro from '../../images/metro.jpg'
import csgo from '../../images/csgo.png'
import hollownig from '../../images/HollowKnight.jpg'
import tombraida from '../../images/Tomb Raider GOTY.jpg'
import doom from '../../images/Doom.jpg'
import valoran from '../../images/Valorant.jpg'
import elden from '../../images/Elden Ring.jpg'
import redded from '../../images/RedDead.jpg'
import falguys from '../../images/Fall_Guys.jpg'
import rocket from '../../images/RocketLeague.jpg'
import gta from '../../images/Grand Theft Auto V.jpg'




const cards=[
    {
        id:0,
        title: 'Sekiro™: Shadows Die Twice',
        image: sekiro,
        url: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/' 
    },
    {
        id:1,
        title: 'Metro: Last Light Redux',
        image: metro,
        url: 'https://store.steampowered.com/app/287390/Metro_Last_Light_Redux/' 
    },
    {
        id:2,
        title: 'Counter-Strike: Global Offensive',
        image: csgo,
        url: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/' 
    },
    {
        id:2,
        title: 'Hollow Knight',
        image: hollownig,
        url: 'https://store.steampowered.com/app/367520/Hollow_Knight/' 
    },
    {
        id:2,
        title: 'Tomb Raider GOTY',
        image: tombraida,
        url: 'https://store.steampowered.com/app/203160/Tomb_Raider/' 
    },
    {
        id:2,
        title: 'DOOM',
        image: doom,
        url: 'https://store.steampowered.com/app/379720/DOOM/' 
    },
    {
        id:2,
        title: 'Valorant',
        image: valoran,
        url: 'https://playvalorant.com/en-us' 
    },
    {
        id:2,
        title: 'Elden Ring',
        image: elden,
        url: 'https://store.steampowered.com/app/1245620/ELDEN_RING/' 
    },
    {
        id:2,
        title: 'Red Dead Redemption II',
        image: redded,
        url: 'https://store.epicgames.com/en-US/p/red-dead-redemption-2' 
    },
    {
        id:2,
        title: 'Fall Guys: Ultimate Knockout',
        image: falguys,
        url: 'https://store.steampowered.com/app/1097150/Fall_Guys_Ultimate_Knockout/' 
    },
    {
        id:2,
        title: 'Rocket League',
        image: rocket,
        url: 'https://store.epicgames.com/en-US/p/rocket-league' 
    },
    {
        id:2,
        title: 'Grand Theft Auto V',
        image: gta,
        url: 'https://store.epicgames.com/en-US/p/grand-theft-auto-v' 
    },

    
    
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center" >
        <div className="row">
            {
                cards.map((card) => (
                    <div className="col-md-4 px-2 py-3" key={card.id}>
                        <Card title={card.title} imageSource={card.image} text={card.text} url={card.url}/>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Cards