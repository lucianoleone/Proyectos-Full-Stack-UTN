import React from 'react'
import { useState } from 'react'
import  WorkspaceItem from './Components/WorkspaceItem/WorkspaceItem'
import WorkspaceList from './Components/WorkspaceList/WorkspaceList'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import FormularioScreen from './Screens/FormularioScreen'



function App() {


  return (
    <div>
      <Routes>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/prueba' element='Soy la prueba'/>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/WorkspaceItem' element={<WorkspaceItem/>}/>
        <Route path='/formulario' element={<FormularioScreen/>}/>
        <WorkspaceList workspaces={workspaces} />
      </Routes>
    </div>
  )
}

const FormularioScreen = () => <h1>Formulario Screen</h1>
export default App
