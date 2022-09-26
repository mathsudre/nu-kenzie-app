import './styles.css';
import * as yup from 'yup';
import { useState } from 'react';
import { toast } from 'react-toastify';



const Form = ({listTransactions,setListTransactions}) => {

    const [transaction, setTransaction] = useState({});
    const [idt, setIdt] = useState(0);

    const notify = () => toast.success("Finança Criada !",{
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000   
      });

  
    async function handleSendForm(){
      try{
        const schema = yup.object().shape({
            description: yup.string().required("Obrigatório"),
            value: yup.number().required("Obrigatório").positive("Valor deve ser positivo"),
            type: yup.string().required("Obrigatório").oneOf(["Entrada","Despesa"])
           })
    
           await schema.validate(transaction)          
           setListTransactions([transaction,...listTransactions]);          
           notify(); 
           console.log(transaction)
      }catch(error){
        if(error instanceof yup.ValidationError){
          toast.error(error.message,{
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1500   
          });
        }
      }

    } 
        

    return (

    <form className="formTransactions" action="#" onSubmit={(e)=> e.preventDefault()}>
        <div className="inputDescription">
            <label htmlFor="description">Descrição</label>
            <input 
            id="description" 
            type="text"
            required 
            placeholder="Digite aqui sua descrição"          
            onChange={(e)=> setTransaction({...transaction,description: e.target.value})}
            />
            <span>Ex:Compra de roupas</span>
        </div>

        <div className="inputsValueType">

            <div className="inputValue">
            <label htmlFor="value">Valor</label>
            <input 
            id="value" 
            type="number"
            required
            placeholder="R$"
            onChange={(e)=> setTransaction({...transaction, value: e.target.value})}
            />
            </div>

            <div className="inputValue type">
                <label htmlFor="type">Tipo de Valor</label>
                <select 
                    name="Tipo de Valor" 
                    id='type'
                    required
        onChange={(e)=> setTransaction({...transaction, type: e.target.value})}
                    >
                    <option defaultValue>Selecione</option>    
                    <option value="Entrada">&#128176; Entrada</option>
                    <option value="Despesa">&#128184; Despesa</option>
                </select>
            </div>

        </div>

        <button type="submit" className="btnAll"
        onClick={()=>{
          setIdt(idt+1);
        setTransaction({...transaction,id:idt})
        handleSendForm()        
         }}> Inserir Valor</button>
    </form>
    )
}

export default Form;