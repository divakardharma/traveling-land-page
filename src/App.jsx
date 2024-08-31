import React from 'react'
import "./App.css"
import Home from "./components/Home/home"
import Main from "./components/Main/main"
import Navbar from './components/Navbar/navbar'
import Footer from "./components/Footer/footer"
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
