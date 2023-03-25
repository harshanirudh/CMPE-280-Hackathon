import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/nav';
import Login from './components/login';
import Home from './components/home';
import Imports from './components/imports';
import FoodChartPage from './components/foodchartpage';
import Predict from './components/predict';
import Bananas from './components/bananas';
import Walnuts from './components/walnuts';
import Mangos from './components/mangos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/imports" element={<FoodChartPage />}></Route>
          <Route path="/yield" element={<Predict />}></Route>
          <Route path="/bananas" element={<Bananas />}></Route>
          <Route path="/mangos" element={<Mangos />}></Route>
          <Route path="/walnuts" element={<Walnuts />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;