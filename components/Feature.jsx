import Link from 'next/link';
import React from 'react';

const Feature = ({ title, description, color, projectLink }) => (
    <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-[#242424] text-white relative overflow-hidden bg-opacity-60 p-8 transition-all hover:scale-105 flex-col">
            <div className="flex items-center mb-3">
                <h2 className=" text-lg title-font font-medium">{title}</h2>
            </div>
            <div className="flex-grow">
                <p className="leading-relaxed text-base">{description}</p>
            </div>
            <Link href={`${projectLink}`} className={`mt-3 text-white inline-flex items-center text-${color} learn-more`}>
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 svg-arrow" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </Link>
            <div className={`absolute -bottom-2 -right-2 rounded-full ${color} w-8 h-8`}></div>
        </div>
    </div>
);

export default Feature;