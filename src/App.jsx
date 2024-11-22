import React from 'react'
import Nav from './Components/Nav/Nav'
import Upcoming from './Components/Upcoming/Upcoming'
import Tags from './Components/Tags/Tags'
import Products from './Components/Products/Products'
import Card from './Components/Card/Card'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Upcoming />
      <Tags />
      <Products />
      <Card />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
