
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ResetPasswordScreen from './Screens/ResetPasswordScreen'
import RewritePasswordScreen from './Screens/RewritePasswordScreen' 
import ProtectedRoute from './Components/ProtectedRoute'
import WorkspaceScreen from './Screens/WorkspaceScreen'
import ChannelScreen from './Screens/ChannelScreen'



function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path='/' element={<LoginScreen/>}/>
        
        <Route path='/rewrite-password' element={<RewritePasswordScreen/>}/> 
        <Route element={<ProtectedRoute/>}>
        <Route path='/reset-password' element={<ResetPasswordScreen/>}/>   
        <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
        <Route path='/workspace/:workspace_id/:channel_id' element={<ChannelScreen/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
