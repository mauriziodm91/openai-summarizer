import Hero from './components/Hero/Hero.component'
import Demo from './components/Demo/Demo.component' //TO DO

import './App.css'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'></div>
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App
