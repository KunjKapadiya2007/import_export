import React from 'react'
import Contact from './pages/contact'
import Header from './component/globle/header'
import Footer from './component/globle/footer'
import GetTeach from './component/contact/getTeach'
import React from 'react'
import Products from "./pages/products";

const App = () => {
  return (
    <>
      <Header />
      <Contact />
      {/* <Footer /> */}
      <Products/>
    </>


  )
}

export default App