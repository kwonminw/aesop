import { Header } from './components/header'
import { Footer } from './components/footer'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Main } from './pages'
import './App.css'

const Layout = () => {
  return(
    <div className='wrapper'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
