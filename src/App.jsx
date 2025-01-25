import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Frontend from './Pages/Frontend/Frontend'
import Kurseng from './Pages/Kurseng/Kurseng'
import Kursengielts from './Pages/Kursengielts/Kursengielts'
import Smm from './Pages/Smm/Smm'
import Errorpage from './Pages/Error/Errorpage'
import Nemistili from './Pages/Nemistili/Nemistili'
import Rustili from './Pages/Rustili/Rustili'
import Kompsavodxonlik from './Pages/Kompsavodxonlik/Kompsavodxonlik'
import Hometwo from './Pages/Hometwo/Hometwo'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='Frontend' element={<Frontend></Frontend>}></Route>
        <Route path='Kurseng' element={<Kurseng></Kurseng>}></Route>
        <Route path='Kursengielts' element={<Kursengielts></Kursengielts>}></Route>
        
        <Route path='Smm' element={<Smm></Smm>}></Route>
        <Route path='Nemistili' element={<Nemistili></Nemistili>}></Route>
        <Route path='Rustili' element={<Rustili></Rustili>}></Route>
        <Route path='Kompyutersavodxonlik' element={<Kompsavodxonlik></Kompsavodxonlik>}></Route>
        <Route path='Hometwo' element={<Hometwo></Hometwo>}></Route>
        <Route path='*' element={<Errorpage></Errorpage>}></Route>
      </Routes>
    </div>
  )
}

export default App