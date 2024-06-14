import headertxt from '../../assets/pokiname.png'
import './headerpoki.css'

export default function Headerpoki(){
    return(
        <div className='headermainDiv'>
            <div className='headerText'>
                <img src={headertxt} alt="" style={{width:'10%',marginTop:'20px'}}/>
            </div>
        </div>
    )
}