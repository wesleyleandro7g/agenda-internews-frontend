import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import DrawerProvider from './context/DrawerContext'

import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <DrawerProvider>
        <Routes />
      </DrawerProvider>
    </BrowserRouter>
  )
}

export default App
