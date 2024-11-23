import { useState } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {HomeScreen, WorkspaceScreen, EstadosScreen, FormulariosScreen} from './Screens'


function App() {


  return (
    <div>
      <Routes>
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/' element={<HomeScreen />} />
        <Route path='/prueba' element= {<h1>Prueba</h1>} />
        <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>} />
        <Route path='/estados' element={<EstadosScreen />} />
        <Route path='/formularios' element={<FormulariosScreen />}/>
      </Routes>
    </div>
    
  )
}

export default App
