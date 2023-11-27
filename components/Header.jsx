import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

const Header = () => {
    const [scrolling, setScrolling] = useState(true);
    const scrollRef = useRef(0);

    useEffect(() => {
        const onScroll = (e) => {
            const currentScroll = e.target.documentElement.scrollTop;

            setScrolling(currentScroll < scrollRef.current || currentScroll < 50);
            scrollRef.current = currentScroll;
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <header className={scrolling ? '' : 'hidden'}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="text-xl">blockchain.enthusiasts</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
                    <Link href='/resources' className="mr-5 text-gray-100 font-medium hover:text-white transition-all duration-300 ease-in-out">resources</Link>
                    <Link href='/projects' className="mr-5 text-gray-100 font-medium hover:text-white transition-all duration-300 ease-in-out">projects</Link>
                    <Link href='/repos' className="mr-5 text-gray-100 font-medium hover:text-white transition-all duration-300 ease-in-out">repos</Link>
                </nav>
                <Link href='https://github.com/ashuydv/blockchain.enthusiasts' target='_blank' className="inline-flex font-medium items-center bg-[#fff] text-gray-700 border-0 py-1 px-5 focus:outline-none text-lg rounded-xl mt-4 md:mt-0 transition-all duration-300 ease-in-out">
                    contribute
                </Link>
            </div>
        </header>
    );
};

export default Header;
