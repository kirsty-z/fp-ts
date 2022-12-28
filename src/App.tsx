import './App.css'
import EitherComponent from './components/fp-ts/Either'
import ReaderComponent from './components/fp-ts/Reader'
import WriterComponent from './components/fp-ts/Writer'

function App() {
  return (
    <div className="App">
      <WriterComponent />
      <EitherComponent />
      <ReaderComponent />
    </div>
  )
}

export default App
