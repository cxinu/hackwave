import { useState } from 'react'

export function ChatMessages() {
  const [messages, setMessages] = useState([])

  return (
    <>
      {messages.map((message: { id: number; component: React.ReactNode }) => (
        <div key={message.id}>{message.component}</div>
      ))}
    </>
  )
}
