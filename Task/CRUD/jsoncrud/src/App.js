import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Emplist from './Emplist';
import Adduser from './Adduser';
import Viewuser from './Viewuser';
import Edituser from './Edituser';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Emplist/>}></Route>
      <Route path='/adduser' element={<Adduser/>}></Route>
      <Route path='/viewuser/:vId' element={<Viewuser/>}></Route>
      <Route path='/edituser/:eId' element={<Edituser/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
