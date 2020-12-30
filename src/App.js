import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import DrawerProvider from './context/DrawerContext'
import ClientProvider from './context/ClientContext'

import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <DrawerProvider>
        <ClientProvider>
          <Routes />
        </ClientProvider>
      </DrawerProvider>
    </BrowserRouter>
  )
}

export default App
