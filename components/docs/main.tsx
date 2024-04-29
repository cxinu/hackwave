import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Showcard from './showcard'
import Frontfont from './frontfont'

export default function Main() {
  const [scrollPosition, setScrollPosition] = useState(0)
  return (
    <section className="text-black body-font lg:pt-20">
      <Frontfont />
      <Showcard />
      <section className="text-gray-600 body-font">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-5 md:py-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={940} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">links crawled</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={740} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Pages Researched</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  <CountUp end={315} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Search Queries Answered</p>
              </div>
            </div>
          </div>
        </section>
        <div className="container px-5 py-5 md:py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="/images/hackwave.png"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Free
                </h2>
                <p className="leading-relaxed text-lg">
                  All of our source code is free and open source.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Responsive
                </h2>
                <p className="leading-relaxed text-lg">
                  UI is full responsiveness accessable of mobile devices.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  SEO Friendly
                </h2>
                <p className="leading-relaxed text-lg">
                  Our templates have the best SEO practices ensuring you get to
                  the top.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Fast
                </h2>
                <p className="leading-relaxed text-lg">
                  The fastest websites you can get.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-3">
                  Google Analytics Supported
                </h2>
                <p className="leading-relaxed text-lg">
                  All our templates come with full support for Google Analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl font-medium title-font text-white mb-4">
              voxel-devs
            </h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Our Team
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}
