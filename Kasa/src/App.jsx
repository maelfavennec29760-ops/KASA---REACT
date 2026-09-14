import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/home.jsx'
import About from './pages/About/about.jsx'
import Housing from './pages/Housing/housing.jsx'
import Error404 from './pages/Error404/error404.jsx'

import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'

function App() {
  return (
    <BrowserRouter>
    <div className='page'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/housing/:id' element={<Housing />} />
        <Route path='/error404' element={<Error404 />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App;