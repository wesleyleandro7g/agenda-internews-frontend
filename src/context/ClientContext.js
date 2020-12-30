import React, { createContext, useContext, useState } from 'react'

const ClientContext = createContext()

export default function ClientProvider({ children }) {
  const [dataClientContext, setDataClientContext] = useState([])

  return (
    <ClientContext.Provider value={{ dataClientContext, setDataClientContext }}>
      {children}
    </ClientContext.Provider>
  )
}

export function useClientContext() {
  const context = useContext(ClientContext)
  const { dataClientContext, setDataClientContext } = context

  return { dataClientContext, setDataClientContext }
}
