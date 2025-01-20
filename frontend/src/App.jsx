import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace />} />

          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/sing-in' element={<SingIn/>} />
          <Route path='/sing-up' element={<SingUp/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/dashboard' element={<Dashboard/>} />

          <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App