
import './App.css';
import Tablecoins from './components/tableCoins';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  const [coins, setcoins] = useState([]);
  const [search,setSearch] = useState('');
  const getData=async()=>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' ")
    console.log(res.data)
    setcoins(res.data);//actualiza los valores
  }
  //useState: permite actualizar una variable
  

  useEffect(()=>{
    getData()
  },[])//no update
  return (
    
    <div className="container">
      <div className='row'>
      <input type="text"  placeholder='Search a Coin' className='form-control bg-dark text-light border-0 mt-4 text-center' 
      onChange={event =>setSearch(event.target.value)}/>
      <Tablecoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
