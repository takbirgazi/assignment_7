import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Heading from './components/Heading/Heading';
import Recipe from './components/Recipe/Recipe';

function App() {

  

  return (
    <>
      <div className='w-[85%] mx-auto'>
        <Header></Header>
        <Hero></Hero>
        <Heading></Heading>
        <Recipe></Recipe>
        
      </div>
    </>
  )
}

export default App
