import React from "react";
import './pokiside.css'
import pokiside from '../../assets/pokiside.png'
import pokisideR from '../../assets/pokisideR.png'
import Pokemonfetch from "../pokemonApi";
const Pokiside = ()=>{
    return(
        <div className="sideimg">
            <img className="sideimgss"
            src={pokiside} alt="image side"></img>
            <Pokemonfetch/>
            <img className="sideimgss"
            src={pokisideR} alt="image right"></img>
        </div>
    )
}
export default Pokiside;