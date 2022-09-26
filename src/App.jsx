import NuKenzieHomeSec from './components/NuKenzieHomeSec';
import HeaderDashBoard from './components/HeaderDashBoard';
import TotalMoney from './components/TotalMoney';
import Form from './components/Form';
import List from './components/List';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ReactComponent as NuKenzieInfo } from '../src/assets/img/NuKenzieInfo_animated.svg';
import { useState } from 'react';
import './App.css';
import './DarkMode.css';
import 'animate.css';


function App() {

  const [listTransactions, setListTransactions] = useState([])

  const [darkMode, setDarkMode] = useState('')

  const [isOpen, setIsOpen] = useState(true);
  
  function Home() {
    setIsOpen(false);
  }

  function DashBoard() {
    setIsOpen(true);
  } 
  

  return (
    isOpen ? <div className="homeNuKenzie">      
       <NuKenzieHomeSec Home={Home}/>
        <NuKenzieInfo className="nuKenzieInfo"/>  
       
    </div>
      : 
      <div className={`dashboardNuKenzie ${darkMode}`}>
        <HeaderDashBoard DashBoard={DashBoard} setDarkMode={setDarkMode} />

        <div className="subContainer">

            <div className="subContainer1">
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
            <TotalMoney listTransactions={listTransactions}/>   
            </div>

          <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>
        </div>

       <ToastContainer/>

      </div>
   
  );
}

export default App;
