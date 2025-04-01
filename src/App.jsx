import { Header } from './components/header'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Layout = () => {
  return(
    <div className='wrapper'>
      <Header />
    </div>
  )
}

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
