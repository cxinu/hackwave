'use client'

import Footer from '@/components/docs/footer'
import Header from '@/components/docs/header'
import Main from '@/components/docs/main'
import SessionWrapper from '@/components/session-wrapper'

export default function Home() {
  return (
    <div className="bg-black bg-starry-night">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
