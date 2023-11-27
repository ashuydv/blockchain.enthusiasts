import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="text-gray-400 bg-[#202020] rounded-xl mt-10 mb-5 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <span className="ml-3 text-xl">blockchain.enthusiasts</span>
                </Link>
                <p className="text-base font-medium text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                    <Link href="https://twitter.com/ashu_ydv18" className="text-gray-50 ml-1" target="_blank" rel="noopener noreferrer">@ashu_ydv18</Link>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center space-x-3 sm:justify-start">
                    <Link href="https://github.com/ashuydv/blockchain.enthusiasts" className="text-gray-50 font-medium">
                        github
                    </Link>
                    <Link href="https://www.instagram.com/blockchain.enthusiasts/" className=" text-gray-50 font-medium">
                        instagram
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer