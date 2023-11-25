import React from 'react'

const Hero = () => {
    return (
        <section class="text-gray-400 bg-[#131313] body-font">
            <div class="container py-24 mx-auto flex flex-wrap">
                <div class="w-full mx-auto">
                    <div class="flex flex-wrap w-full bg-[#000000] py-32 px-10 relative mb-4 rounded-3xl overflow-hidden">
                        <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/820x340" />
                        <div class="text-center relative z-10 w-full">
                            <h2 class="text-2xl text-white font-medium title-font mb-2">Shooting Stars</h2>
                            <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-2">
                        <div class="px-2 w-1/2">
                            <div class="flex flex-wrap w-full bg-[#000000] sm:py-24 py-16 sm:px-10 px-6 relative rounded-3xl overflow-hidden">
                                <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460" />
                                <div class="text-center relative z-10 w-full">
                                    <h2 class="text-xl text-white font-medium title-font mb-2">Shooting Stars</h2>
                                    <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 w-1/2">
                            <div class="flex flex-wrap w-full bg-[#000000] sm:py-24 py-16 sm:px-10 px-6 relative rounded-3xl overflow-hidden">
                                <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x420" />
                                <div class="text-center relative z-10 w-full">
                                    <h2 class="text-xl text-white font-medium title-font mb-2">Shooting Stars</h2>
                                    <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero