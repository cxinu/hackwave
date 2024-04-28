'use client'

import { ChatPanel } from './chat-panel'
import { ChatMessages } from './chat-messages'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from './ui/button'

export function Chat() {
  // const { data: session } = useSession()
  // if (session) {
  return (
    <div className="px-8 md:px-12 pt-6 md:pt-8 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-4">
      <ChatMessages />
      <ChatPanel />
    </div>
  )
  //   }
  //   return (
  //     <div className="m-40">
  //       Not signed in <br /> <Button onClick={() => signIn()}>Sign in</Button>
  //     </div>
  //   )
}
