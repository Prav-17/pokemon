import headertxt from '../../assets/pokiname.png'
import './headerpoki.css'

export default function Headerpoki(){
    return(
        <div className='headermainDiv'>
            <div className='headerText'>
                <img src={headertxt} alt=""/>
            </div>
        </div>
    )
}