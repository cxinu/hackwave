import Link from 'next/link'

export default function Header() {
  return (
    <header className="text-white body-font fixed w-full z-50 backdrop-blur-md">
      <div className="container mx-auto flex flex-wrap p-3 md:flex-row">
        <a className="flex title-font font-medium text-white pr-4" href="/">
          <span className="ml-3 text-3xl">Lumin.ai</span>
        </a>
        <Link href="/login" className="ml-auto">
          <button className="px-4 py-2 mt-0 text-sm font-semibold text-white bg-blue-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            Login
          </button>
        </Link>
      </div>
    </header>
  )
}
