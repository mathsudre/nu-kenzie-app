import './styles.css';
import lottie from "lottie-web"
import { useEffect,useRef } from "react";


const TotalMoney = ({listTransactions}) => {
    const data = listTransactions.length > 0
    
    const container = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
        container:container.current, 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./25197-piggy-bank-pink.json') 
    });
        return () => lottie.destroy()        
    },[])
  


    const totalMoney = listTransactions.reduce((acc,item) => {
    return item.type === "Entrada" ?  acc + Number(item.value) : acc - Number(item.value)
    },0);

    return data ?  <section className='containerTotalMoney'>
            <p> Valor total:<span> $ {totalMoney}</span></p>
            <span>O valor se refere ao saldo</span>
            </section>        
                :
            <section ref={container} className='containerNoMoney'>                  
            </section>
        
    }
    


export default TotalMoney;