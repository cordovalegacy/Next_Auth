import Link from 'next/link'
import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import SignOut from '@/components/SignOut'

export default async function Home() {
  const session: any = await getServerSession(options)
  console.log(session)
  return (
    <main className="flex flex-col min-h-screen items-center justify-evenly p-24 text-white text-4xl">
      {session ? <h1>You are logged in! {session.user.name}</h1> : <h1>You shall not pass</h1>}
      <div className='w-full flex justify-evenly items-center'>
        <Link href={'/home'}>Home</Link>
        <Link href={'/server_components'}>Server - NextAuth</Link>
        <Link href={'/client_components'}>Client - NextAuth</Link>
        <SignOut />
      </div>
    </main>
  )
}
