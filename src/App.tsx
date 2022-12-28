import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import PatternMatching from './components/fp-ts/pattern-matching/PatternMatching'
import routes from './router/app'
function WarpRoute() {
  const element = useRoutes(routes)
  return element
}
function App() {
  return (
    <BrowserRouter>
      <WarpRoute />
    </BrowserRouter>
  )
}

export default App
