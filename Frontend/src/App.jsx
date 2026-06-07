import Parent from './Pages/Parent'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Navbar  from './Pages/Navbar'
import Counter from './Pages/Counter'

const App = ()  => {
  return (
   //Fragment Tag
   <>
   <Navbar/>
   <h1>Hello world</h1>
   <h1>Hello world</h1>
   <Parent/>
   <Home/>
   <About/>
   <Contact/>
   <Service/>
   <Counter/>
   </>
  )
}

export default App 