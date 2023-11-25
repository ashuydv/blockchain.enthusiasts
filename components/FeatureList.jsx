import React from 'react';
import Feature from './Feature';

const FeatureList = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <p className='text-white'>No data available</p>;
    }

    return (
        <div className="flex flex-wrap -m-4">
            {data.map(item => (
                <Feature
                    key={item.id}
                    title={item.fields.Title}
                    description={item.fields.Description}
                />
            ))}
        </div>
    );
};

export default FeatureList;
