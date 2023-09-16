import NextAuth from "next-auth/next"
import { options } from "./options"

const handler = NextAuth(options)

export { handler as GET, handler as POST } //nextjs 13 w/ app router