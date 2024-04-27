'use client'

import { ChatPanel } from './chat-panel'
import { ChatMessages } from './chat-messages'

export function Chat() {
  return (
    <div>
      <ChatMessages />
      <ChatPanel />
    </div>
  )
}
