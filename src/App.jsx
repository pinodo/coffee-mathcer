import './App.css'
import Canvas from './components/Canvas'
import Weathers from './lib/constants/weathers'

function App() {
  const weather = Weathers.CLOUDY
  return <Canvas weather={weather} />
}

export default App
