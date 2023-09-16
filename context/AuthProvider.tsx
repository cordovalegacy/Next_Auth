"use client"

import { SessionProvider } from 'next-auth/react'

type Sessions = {
    children: React.ReactNode
}

export default function AuthProvider({ children }: Sessions) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
