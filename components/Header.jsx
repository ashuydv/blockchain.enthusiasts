import React from 'react'

const Header = () => {
    return (
        <header className="text-gray-400 bg-[#131313] body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="text-xl">blockchain.enthusiasts</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
                    <a className="mr-5 text-gray-100 hover:text-white">resources</a>
                    <a className="mr-5 text-gray-100 hover:text-white">tools</a>
                    {/* <a className="mr-5 text-gray-100 hover:text-white">products</a> */}
                    <a className="mr-5 text-gray-100 hover:text-white">projects</a>
                </nav>
                <button className="inline-flex items-center bg-[#eba917] text-gray-100 border-0 py-1 px-5 focus:outline-none text-lg rounded-xl mt-4 md:mt-0">
                    Resources
                </button>
            </div>
        </header>
    )
}

export default Header