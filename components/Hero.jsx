import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className="text-gray-400 bg-[#131313] body-font">
            <div className="container pt-40 pb-24 mx-auto flex flex-wrap">
                <div className="w-full mx-auto">
                    <Link href='/resources'>
                        <div className="flex flex-wrap w-full bg-[#242424] py-32 px-10 relative mb-4 rounded-3xl overflow-hidden">
                            <div className="text-center relative z-10 w-full">
                                <h2 className="text-4xl text-white font-medium title-font mb-2">Explore Blockchain Resources</h2>
                                <p className="leading-relaxed text-gray-200">Discover a curated list of blockchain resources, from the basics to roadmap generators, and more.</p>
                            </div>
                            <div className={`absolute -top-8 -left-8 rounded-full bg-orange-400 w-20 h-20`}></div>
                            <div className={`absolute -top-8 -right-8 rounded-full bg-orange-400 w-20 h-20`}></div>
                            <div className={`absolute -bottom-[15%] left-[50%] -translate-x-[50%] rounded-full border-8 border-orange-400 w-24 h-24`}></div>
                        </div>
                    </Link>
                    <div className="flex flex-wrap -mx-2 overflow-hidden">
                        <div className="px-2 w-1/2">
                            <Link href='/projects'>
                                <div className="flex flex-wrap w-full bg-[#242424] sm:py-24 py-16 sm:px-10 px-6 relative rounded-3xl overflow-hidden">
                                    <div className="text-center relative z-10 w-full">
                                        <h2 className="text-2xl text-white font-medium title-font mb-2">Blockchain Projects Showcase</h2>
                                        <p className="leading-relaxed text-gray-200">Explore a curated list of blockchain projects, ranging from foundational concepts to advanced developments.</p>
                                    </div>
                                    <div className={`absolute -top-10 -right-10 rounded-full bg-orange-400 w-20 h-20`}></div>
                                    <div className={`absolute -bottom-8 -left-8 rounded-full border-8 border-orange-400 w-20 h-20`}></div>
                                </div>
                            </Link>
                        </div>
                        <div className="px-2 w-1/2">
                            <Link href='/repos'>
                                <div className="flex flex-wrap w-full bg-[#242424] sm:py-24 py-16 sm:px-10 px-6 relative rounded-3xl overflow-hidden">
                                    <div className="text-center relative z-10 w-full">
                                        <h2 className="text-2xl text-white font-medium title-font mb-2">Contribute to Open Source Repositories</h2>
                                        <p className="leading-relaxed text-gray-200">Get involved in open-source projects with our curated list of blockchain repositories, perfect for contributors of all levels.</p>
                                    </div>
                                    <div className={`absolute -top-10 -left-10 rounded-full bg-orange-400 w-20 h-20`}></div>
                                    <div className={`absolute -bottom-8 -right-8 rounded-full border-8 border-orange-400 w-20 h-20`}></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
