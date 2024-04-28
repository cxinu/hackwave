import { signIn } from 'next-auth/react'
import { NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <div>
      <p>This is login page - public route</p>
      <button onClick={() => signIn('github')}>Sign in with github</button>
    </div>
  )
}

export default LoginPage
