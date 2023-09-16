"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function ClientPage() {

    // // ! These five lines handle *client side* next auth
    // const { data: session, status } = useSession({
    //     required: true,
    //     onUnauthenticated() {
    //         redirect('/api/auth/signin?callback=/client_components')
    //     }
    // })
    // // ! -------------------------------------------------- !

    // if(status === "loading"){
    //     return "Loading or not authenticated"
    // }

    return (
        <div>
            <h1>This page is protected on the client side</h1>
        </div>
    )
}
