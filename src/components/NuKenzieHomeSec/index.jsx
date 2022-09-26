import './styles.css';
import { ReactComponent as NuKenzieLogo} from "./NuKenzieLogo.svg";


const NuKenzieHomeSec = ({Home}) => {
    
    return(
        <div className='containerNuHome'>
            <NuKenzieLogo className='logoKenzie'/>
            <div className='containerDescription'>
             <h1>Centralize o controle das suas finanças</h1>
             <span>de forma rápida e segura</span>
             <button className='btnAll' type='button'
             onClick={Home}>
             Iniciar</button>   
            </div>
        </div>
    )
}

export default NuKenzieHomeSec;