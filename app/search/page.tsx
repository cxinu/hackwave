'use client'

import { Chat } from '@/components/chat'
import { useSession, signIn, signOut, SessionProvider } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  // rendering components for logged in users
  return <Chat />
}
