import logo from './logo.svg';
import './App.css';
import { TopNav } from './Pages/top-nav';
import { Home } from './Pages/Home';
import { FoodList } from './Pages/FoodList';
import { Test } from './Pages/Test';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Restaurant } from './Pages/Restaurant';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= '/' element={<TopNav/>}>
        <Route index element={<Home />} />
        <Route path="/foodlist" element={<FoodList />} />
        <Route path="/Restaurant/:restaurant" element={<Restaurant />} /> 
      </Route>
     
      <Route path='/test' element={<Test />}/>
    </Routes>  
    </BrowserRouter>
    </>
  );
}

export default App;
