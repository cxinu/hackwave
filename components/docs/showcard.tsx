import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Showcard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href="https://luminai-search.vercel.app">
      <div
        className="relative container flex flex-col items-center justify-center align-middle py-8 mx-auto md:p-1 p-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className={`object-cover object-center w-full mb-10 g327 rounded-lg shadow-md transition-all ${
            isHovered ? 'blur-sm' : ''
          }`}
          alt="hero"
          src="/images/searchresults.png"
          height={720}
          width={1260}
        />
        {isHovered && (
          <div className="absolute">
            <p className="text-white text-[4vh] md:text-5xl font-bold">
              Try Lumin.<text className="text-indigo-600">ai</text> ↗
            </p>
          </div>
        )}
      </div>
    </Link>
  )
}
