
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Page404 from './404Page';
import AboutUs from './AboutUs';
import './App.css';
import Appointment from './Appointment';
import ContactUs from './ContactUs';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import Home from './Home'
import OurService from './OurService';
import TeamMamber from './TeamMamber';
import Testimonial from './Testimonial';

function App() {
  return (
    <div >


      <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/Header' element={<Header/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/OurService' element={<OurService/>}></Route>
      <Route path='/Features' element={<Features/>}></Route>
      <Route path='/Appointment' element={<Appointment/>}></Route>
      <Route path='/ContactUs' element={<ContactUs/>}></Route>
      <Route path='/TeamMamber' element={<TeamMamber/>}></Route>
      <Route path='/Testimonial' element={<Testimonial/>}></Route>
      <Route path='/Page404' element={<Page404/>}></Route>
      <Route path='/Footer' element={<Footer/>}></Route>
      </Routes>  
    <Footer/>
    </BrowserRouter>


    </div>
  );
}

export default App;
