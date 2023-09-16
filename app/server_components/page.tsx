import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

const ProtectedPage = async () => {

    // ! These two lines handle *server side* next auth
    // const session = await getServerSession(options)
    // if (!session) redirect('/api/auth/signin?callbackUrl=/server_components')
    // ! -------------------------------------------------- !

    return (
        <h2>Protected Page</h2>
    )
}

export default ProtectedPage
