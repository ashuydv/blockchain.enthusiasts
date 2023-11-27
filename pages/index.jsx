// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import Head from 'next/head';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredData, setFilteredData] = useState([]); // State to hold filtered data based on search query

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
            <Head>
                <title>blockchain.enthusiasts</title>
                <meta property="og:title" content="blockchain.enthusiasts" key="title" />
                <meta property="og:description" content="a curated platform, for all the blockchain based resources out there !!" key="description" />
            </Head>
            <Hero />
            {/* Include the SearchBar component with the handleSearch function */}
            <section className='space-y-14 py-12'>
                {/* Use filteredData instead of data */}
                <FeatureSection
                    title='resources'
                    items={filteredData.length > 0 ? filteredData[0].items : data.resources}
                    color='bg-purple-500'
                />
                <FeatureSection
                    title='projects'
                    items={filteredData.length > 1 ? filteredData[1].items : data.projects}
                    color='bg-yellow-500'
                />
                <FeatureSection
                    title='repos'
                    items={filteredData.length > 2 ? filteredData[2].items : data.repos}
                    color='bg-green-500'
                />
            </section>
        </Layout>
    );
};

export default Home;
