import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './page/Home'
import Agency from './page/Agency'
import Project from './page/Project'
import Navbarmenu from './component/navigation/navbarmenu'
import Navbar from './component/navigation/navbar'
import Contact from './page/contact'
import Blog from './page/blog'
import Modern404Page from './component/Home/errorpage'

function App(){
  return (
      <div className=' overflow-x-hidden'>
        <Navbar/>
        <Navbarmenu/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/agency" element={<Agency/>} />
      <Route path="/work" element={<Project/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path="*" element={<Modern404Page/>} />
    </Routes>
      </div>
  )
}

export default App
