import Parent from './Pages/Parent'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./Pages/Navbar"
import Counter from './Pages/Counter'
import Effects from './Pages/Effects'

const App = () => {
  return (
    //Fragment Tag
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/parent' element={<Parent/>}></Route>
        <Route path='/usestate' element={<Counter/>}></Route>
        <Route path='/useEffect' element={<Effects/>}></Route>
        
      </Routes>
    </>
  )
 
}

          export default App 