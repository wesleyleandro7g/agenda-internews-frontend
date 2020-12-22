import React, { createContext, useContext, useState } from 'react'

const DrawerContext = createContext()

export default function DrawerProvider({ children }) {
  const [open, setOpen] = useState(true)
  const [
    internalOptionsRegisterVisible,
    setInternalOptionsRegisterVisible
  ] = useState(false)

  return (
    <DrawerContext.Provider
      value={{
        open,
        setOpen,

        internalOptionsRegisterVisible,
        setInternalOptionsRegisterVisible
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}

export function useDrawer() {
  const context = useContext(DrawerContext)
  const {
    open,
    setOpen,
    internalOptionsRegisterVisible,
    setInternalOptionsRegisterVisible
  } = context

  return {
    open,
    setOpen,

    internalOptionsRegisterVisible,
    setInternalOptionsRegisterVisible
  }
}
