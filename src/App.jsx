import React from 'react'
import Header from './containers/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListing from './containers/ProductLisiting'
import ProductDetail from './containers/ProductDetail'

const App = () => {
  return (
    <>
     <div className='flex flex-col'>
      <Header/>
      <Router>
          <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path='/product/:productId' element={<ProductDetail/>} />
          <Route>Route not found 404!</Route>
          </Routes>
      </Router>
     </div>
    </>
  )
}

export default App