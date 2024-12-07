
import { Route, Routes } from 'react-router-dom'
import Home from '../components/navbar/pages/Home'
import About from '../components/navbar/pages/About'
import Help from '../components/navbar/pages/Help'
import Contact from '../components/navbar/pages/Contact'
import Currency from '../components/navbar/pages/Currency'
import Temprature from '../components/navbar/pages/Temprature'
import Weight from '../components/navbar/pages/Weight.JSX'
import Login from '../components/navbar/pages/Login'
const Router = () => {
  return (
    <div>
      <Routes>
     <Route  path='/' element={<Home/>} />
     <Route  path='/About' element={<About/>} />
     <Route  path='/Help' element={<Help/>} />
     <Route  path='/Contact' element={<Contact/>} />
     <Route  path='/Currency' element={<Currency/>} />
     <Route  path='/Temprature' element={<Temprature/>} />
     <Route  path='/Weight' element={<Weight/>} />
     <Route  path='/Login' element={<Login/>} />

      </Routes>
    </div>
  )
}

export default Router
