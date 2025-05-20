import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Addemp from './Addemp';
import Editemp from './Editemp';
import Viewemp from './Viewemp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addEmp' element={<Addemp />}></Route>
          <Route path='/editEmp/:editId' element={<Editemp />}></Route>
          <Route path='/viewEmp/:viewId' element={<Viewemp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
