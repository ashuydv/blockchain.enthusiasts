import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Feature from '../components/Feature';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/airtable')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <Layout>
            <Hero />
            <section className=' space-y-4 pb-24'>
                <div className='my-6'>
                    <div className="mb-3">
                        <h2 className='text-xl font-medium title-font text-white'>Resources</h2>
                        <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            data.resources && data.resources.slice(0, 6).map((resource) => (
                                <Feature
                                    key={resource.id}
                                    title={resource.fields.title}
                                    description={resource.fields.description}
                                    color={"bg-orange-500"}
                                    projectLink={resource.fields.link} />
                            ))
                        }
                    </div>
                </div>
                <div className='my-6'>
                    <div className="mb-3">
                        <h2 className='text-xl font-medium title-font text-white'>Projects</h2>
                        <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            data.projects && data.projects.slice(0, 6).map((project) => (
                                <Feature
                                    key={project.id}
                                    title={project.fields.title}
                                    description={project.fields.description}
                                    color={"bg-yellow-500"}
                                    projectLink={project.fields.link}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='my-6'>
                    <div className="mb-3">
                        <h2 className='text-xl font-medium title-font text-white'>Repos</h2>
                        <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            data.repos && data.repos.slice(0, 6).map((item) => (
                                <Feature
                                    key={item.id}
                                    title={item.fields.title}
                                    description={item.fields.description}
                                    color={"bg-green-500"}
                                    projectLink={item.fields.link}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>

        </Layout>
    );
};


export default Home;
