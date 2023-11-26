import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/api/airtable')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
 
    if (loading) {
        return (
            <div className=' min-h-screen relative'>
                <div className="flex items-center justify-center gap-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <div className="w-12 h-12 rounded-full animate-bounce bg-orange-400 "></div>
                    <div className="w-12 h-12 rounded-full animate-bounce border-orange-500 border-4 "></div>
                </div>
            </div>
        );
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <Layout>
            <Hero />
            <section className='space-y-14 py-12'>
                <FeatureSection
                    title='resources'
                    items={data.resources}
                    color='bg-purple-500'
                />
                <FeatureSection
                    title='projects'
                    items={data.projects}
                    color='bg-yellow-500'
                />
                <FeatureSection
                    title='repos'
                    items={data.repos}
                    color='bg-green-500'
                />
            </section>
        </Layout>
    );
};

export default Home;
