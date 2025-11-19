import React from 'react'

function LandingPage() {
    return (
        <div className='relative w-[100%] h-auto'>
            <div className='w-[100%] h-[85vh] max-lg:h-[70vh]'>
                <img
                    className='w-[100%] h-[100%] object-cover'
                    src="https://res.cloudinary.com/dxe5unu0u/image/upload/v1763547208/cowomen-ZKHksse8tUU-unsplash_i49gad.jpg" alt="" />
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black/60  flex flex-col gap-2 justify-center px-[4em] max-lg:px-[1em]'>
                <h3 className='text-[#4D61FF] font-bold text-2xl max-lg:text-[1em] uppercase '>we are expert in</h3>
                <h1 className='font-light text-8xl max-lg:text-[4em] text-white'>Business</h1>
                <h1 className='font-light text-8xl max-lg:text-[4em] text-white'>solutions</h1>
            </div>
        </div>
    )
}

export default LandingPage
