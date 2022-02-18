import { CoinRow } from "./CoinRow";
const titles=["#","Coin","Price USD","Price Change","24h Volume"];
function Tablecoins({coins,search}){
  //buscar el texto
  const filteredCoins = coins.filter((coin)=>
  coin.name.toLowerCase().includes(search.toLowerCase())

);
  return (
    <table className="table table-dark mt-4 table-hover">
        <thead>
            <tr>{titles.map((title,index)=>(
              <td key={index}>{title}</td>
            ))}</tr>
        </thead>
        <tbody>
            {/*Enviar dos datos */}
            {filteredCoins.map((coin ,index)=>(
                <CoinRow coin={coin} key={index} index={index+1}/>
            ))}
        </tbody>
    </table>
  )
}
export default Tablecoins;
