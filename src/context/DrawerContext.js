import React, { createContext, useContext, useState } from 'react'

const DrawerContext = createContext()

export default function DrawerProvider({ children }) {
  const [open, setOpen] = useState(true)

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}

export function useDrawer() {
  const context = useContext(DrawerContext)
  const { open, setOpen } = context

  return { open, setOpen }
}
