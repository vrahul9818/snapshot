import React from "react";
import { useState,useEffect } from "react";
import Loadimages from "./front";
const Header = () => {

const[input ,setinput] = useState("");
const [query,setquery] = useState("");

console.log(input,query)
    return(
        <>
        <div className="upper-portion">
        <h1>SNAPSHOT</h1>
        <input type="search" onChange={(e)=>{setinput(e.target.value)}}/>
        <button onClick={() => setquery(input)}>search</button>
        </div>
        <div className="lower-portion">
        <button value="Mountain" onClick={(e) => setquery(e.target.value)}>Mountain</button>
        <button value="Beaches" onClick={(e) => setquery(e.target.value)}>Beaches</button>
        <button value="Birds" onClick={(e) => setquery(e.target.value)}>Birds</button>
        <button value="Food" onClick={(e) => setquery(e.target.value)}>Food</button>
        </div>
        <Loadimages query={query}/>
        </>
    )
}
export default Header