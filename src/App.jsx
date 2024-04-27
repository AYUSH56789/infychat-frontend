import { Outlet } from 'react-router-dom'
import './App.css'
import LandingHeader from './component/landingPage/landingHeader/LandingHeader'
import HeroSection from './component/landingPage/bodyContainer/herosection/HeroSection'

function App() {
  console.log();
  return (
    <>
    <Outlet/>
    
    </>
  )
}

export default App
