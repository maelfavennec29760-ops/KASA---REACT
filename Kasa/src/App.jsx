import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Housing from './pages/Housing/index.jsx'
import Error404 from './pages/Error404/index.jsx'

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
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App;