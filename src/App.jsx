import './App.css'
import FoodProcess from './components/FoodProcess/FoodProcess'
import Header from './components/Header/Header'
import Heading from './components/Heading/Heading'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <>
      <div className='w-[85%] mx-auto'>
        <Header></Header> 
        <Hero></Hero>
        <Heading></Heading>
        <FoodProcess></FoodProcess>
      </div>
    </>
  )
}

export default App
