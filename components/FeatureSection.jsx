import React from 'react';
import Feature from './Feature';
import Link from 'next/link';

const FeatureSection = ({ title, items, color }) => (
    <div className='my-6'>
        <div className="flex items-center justify-between mb-6">
            <div>
                <h2 className='text-xl font-medium title-font text-white'>{title}</h2>
                <div className={`w-16 h-1 rounded-full ${color} inline-flex`}></div>
            </div>
            <div>
                <Link href={`/${title}`} className='text-base font-medium text-white'>
                    view more
                </Link>
            </div>
        </div>
        <div className="flex flex-wrap -m-4">
            {items && items.slice(0, 6).map((item) => (
                <Feature
                    key={item.id}
                    title={item.fields.title}
                    description={item.fields.description}
                    color={color}
                    projectLink={item.fields.link}
                />
            ))}
        </div>
    </div>
);

export default FeatureSection;
