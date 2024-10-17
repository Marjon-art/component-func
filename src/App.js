import './App.css';
import data from"./data.json";
import { ShopItemFunc } from "./ShopItemFunc.js";


function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={data} />
      </div>
    </div>
  );
}
export default App;
