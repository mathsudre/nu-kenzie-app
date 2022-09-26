import './styles.css';
import FlatList from 'flatlist-react';
import Card from './Card';
import { toast } from 'react-toastify';
import { ReactComponent as NoCard } from "./NoCard.svg";
import { useState } from 'react';
import { motion } from "framer-motion"

const List = ({listTransactions,setListTransactions}) => {

    const [filtering, setFiltering] = useState("Todos");

    const  Filter = (type)=>{
            setFiltering(type);
        }

    const notify = () => toast.success("Finança Deletada !",{
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 600   
         });

    const DeleteTransaction = (deleted)=>{
        notify()
        console.log(deleted)
        setListTransactions(previousListTransactions => {
        return previousListTransactions.filter(transaction => transaction !== deleted)
        })
    }

   

    return(

        <section className='containerFinanças'>

            <section className='navContainerFinanças'>
            <h2>Resumo financeiro</h2>

            <nav className='navButtons'>

            <button type='button' onClick={()=>Filter("Todos")}>Todos</button>
            <button type='button' onClick={()=>Filter("Entrada")}>Entradas</button>
            <button type='button' onClick={()=>Filter("Despesa")}>Despesas</button>

            </nav>

            </section>

            <motion.div layout className='containerCardFinances'>

            <FlatList 
            list={listTransactions} 

            renderItem={(card,idx) => <Card listTransactions={card} key={idx} 
            Delete={DeleteTransaction} />}

            renderWhenEmpty={() =>      
                <>
                <h2 className='emptyCard'>Você ainda não possui nenhum lançamento</h2>              
                <NoCard className='noCard'/>                
                </> 
                }

            filterBy={card => filtering==="Todos"?card.type!==filtering:card.type===filtering} 
            />

            </motion.div>
        </section>
    )
    
    
}

export default List;