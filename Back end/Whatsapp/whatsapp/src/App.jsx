import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ChatScreens from './Screens/ChatScreens'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ChatScreens />} />
        <Route path='/contact/:contact_id' element={<ChatScreens />} />
      </Routes>
    </div>
    
    
  )
}

export default App
