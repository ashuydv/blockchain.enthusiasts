import React, { useEffect, useState } from 'react'
import Feature from '../components/Feature';
import axios from 'axios';
import Layout from '../components/Layout';
import Head from 'next/head';

const projects = () => {
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
                    <div className="w-12 h-12 rounded-full animate-bounce bg-yellow-400 "></div>
                    <div className="w-12 h-12 rounded-full animate-bounce border-yellow-500 border-4 "></div>
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
                <title>projects/blockchain.enthusiasts</title>
                <meta property="og:title" content="blockchain.enthusiasts" key="title" />
                <meta property="og:description" content="a curated platform, for all the blockchain based resources out there !!" key="description" />
            </Head>
            <div className="flex flex-wrap pt-32 pb-24 -m-4">
                {data.projects && data.projects.map((item) => (
                    <Feature
                        key={item.id}
                        title={item.fields.title}
                        description={item.fields.description}
                        color="bg-yellow-400"
                        projectLink={item.fields.link}
                    />
                ))}
            </div>
        </Layout>
    )
}

export default projects