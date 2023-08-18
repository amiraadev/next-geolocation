"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"

function Provider({children}) {
  return (
    <div>
      <SessionProvider>
      {children}
      </SessionProvider>
    </div>
  )
}

export default Provider
