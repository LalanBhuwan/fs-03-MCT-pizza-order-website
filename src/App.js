import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Pages/Home';
import AddToCard from './Components/Pages/AddToCard';
import OrderSuccess from './Components/Pages/OrderSuccess';
import Menu from './Components/Pages/Menu';

import QuickView from './Components/Pages/QuickView';

function App() {
  return (
    <div >
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path= "/menu" element = {<Menu/>}/>
        <Route path= "/queckView" element={<QuickView/>}/>
        <Route path= "/addtocard" element={<AddToCard/>}/>
        <Route path="/ordersccess" element={<OrderSuccess/>}/>
      </Routes>
    </div>
  );
}

export default App;
