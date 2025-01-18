import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Error />} />

        <Route path='/' element={<Home/>} />

        <Route path='/about' element={<About />} />
        
        <Route path='/sing-in' element={<SingIn/>} />

        <Route path='/sing-up' element={<SingUp/>} />

        <Route path='/projects' element={<Projects/>} />

        <Route path='/dashboard' element={<Dashboard/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App