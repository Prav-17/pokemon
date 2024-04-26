import React,{useState,useEffect,useRef} from "react"
import './pokemon.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Pokemonfetch = (props)=>{
    const [disName,setdisName]=useState();
    const [ability,setAbility]=useState();
    const [moves,setMoves]=useState();
    const [weight,setWeight]=useState();
    const [height,setHeight]=useState();
    const [result,setResult]=useState({});
    const imgdis=useRef(null);
    const [name,setName]=useState("pikachu");
    
    
    
    
    async function buttonHandler(){
        try{
            // const name = document.getElementById("pokemonName").value.toLowerCase();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
            if(response.ok){
                console.log(response);
                let res= await response.json();
                const imgpik= res.sprites.front_default;
                imgdis.current.src=imgpik;
                console.log(imgpik);
                setdisName(res.species.name);
                let abl= res.abilities &&  res.abilities[0] && res.abilities[0].ability.name || "";
                setAbility(abl);
                let mov = res.types[0].type.name;
                setMoves(mov);
                let wei= res.weight;
                setWeight(wei);
                let hei=res.height;
                setHeight(hei);
                setResult(res);  

            }else{
                throw new Error("Fetch failed")
            }            
        } catch(err){
            console.log("Err",err);
        }
        
    }
    
    useEffect(()=>{
        buttonHandler();
    },[]);

    return(
        <div className="pokimainDiv">
            <div className="search searchcol">
            
            <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Search" variant="outlined" className="fetchInput" type="text" onChange={(e)=>{setName(e.target.value)}} />
          </Box>

          <button className="button-27" role="button" onClick={buttonHandler}>Fetch</button>
         </div>

            <div className="card">
                <div style={{backgroundColor:"black", borderRadius:"10px", padding:"2%", margin:"2%"}}><img style={{width:"40%"}} src="" ref={imgdis}  alt="img"/></div>
                <div className="deets deetscol">
                <div>Name : {disName}</div>
                <div>Abilities : {ability}</div>
                <div>Type : {moves}</div>
                <div>Weight : {weight}</div>
                <div>Height : {height}</div>
                <br></br>
                </div>
            </div>
            
        </div>
    )

}
export default Pokemonfetch;