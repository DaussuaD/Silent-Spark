import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../src/assets/css/style.css'
import Homepages from './pages/homepages'
import Loginpages from './pages/loginpages'
import Signinpages from './pages/signinpages';
import Gurupages from './pages/gurupages';
import Bookingpages from './pages/bookingpages';
import Paymentpages from './pages/paymentpages';
import Loadingpages from './pages/loadingpages';
import Failed from './pages/failed';
import Succes from './pages/succes';
import Gatherpages from './pages/gatherpages';



const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/'element={<Homepages/>}/>
      <Route path='/loginpages'element={<Loginpages/>}/>
      <Route path='/signinpages'element={<Signinpages/>}/>
      <Route path='/gurupages'element={<Gurupages/>}/>
      <Route path='/bookingpages'element={<Bookingpages/>}/>
      <Route path='/paymentpages'element={<Paymentpages/>}/>
      <Route path='/loadingpages'element={<Loadingpages/>}/>
      <Route path='/failed'element={<Failed/>}/>
      <Route path='/succes'element={<Succes/>}/>
      <Route path='/gatherpages'element={<Gatherpages/>}/>
    </Routes>
   </Router>
  )
}

export default App
