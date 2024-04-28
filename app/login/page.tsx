'use client'

import { signIn } from 'next-auth/react'
import { NextPage } from 'next'
import { Button } from '@/components/ui/button'

const LoginPage: NextPage = () => {
  return (
    <div>
      <p>This is login page - public route</p>
      <Button onClick={() => signIn('github')}>Sign in with github</Button>
    </div>
  )
}

export default LoginPage
