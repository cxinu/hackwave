export default function Frontfont() {
  return (
    <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-10 lg:pt-24">
      <div className="flex flex-col w-full mb-2 text-left md:text-center ">
        <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
          <span>
            Lumin<text className="text-zinc-700">.</text>
            <text className="border-purple-">ai</text>{' '}
          </span>
          <br className="hidden lg:block"></br>
          <div className="text-violet-500">AI web search</div>
        </h1>
        <br></br>
        <p className="mx-auto my-5 text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
          Lumin<text className="text-purple-400 font-bold">ai</text> is a GPT-4
          powered personalized search engine that uses the latest in AI
          technology to provide you with the best search results.
        </p>
      </div>
    </div>
  )
}
