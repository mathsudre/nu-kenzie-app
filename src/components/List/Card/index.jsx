import './styles.css'
import { FcFullTrash } from "react-icons/fc"
import { motion } from "framer-motion"

const Card = ({listTransactions,Delete}) => {

        const styleType = listTransactions.type === "Entrada" ? "borderGreen" : ""

        return ( 
        <motion.div layout className={`cardFinance ${styleType}`} >
            <div className="cardFinanceDescription">
            <p> {listTransactions.description} </p>
            <span className='spanCardPrice'>R$ {listTransactions.value},00 
            <button  onClick={()=>Delete(listTransactions)} type='button'><FcFullTrash/></button>
            </span>
            </div>          
            <span>{listTransactions.type}</span>
        </motion.div>
        )

}

export default Card;