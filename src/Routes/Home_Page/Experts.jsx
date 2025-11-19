import React from 'react'

function Experts({img}) {
    return (
        <div className='w-[25%] max-lg:w-[48%] max-sm:w-[100%] h-[40vh]  max-sm:h-[60vh]  my-[5em]  max-lg:my-[3em]   max-sm:my-[3em] '>
            <div className='w-[100%] h-[100%]'>
                <img
                    className='w-[100%] h-[100%] object-cover rounded-xl'
                    src={img} alt="" />
            </div>
            <section className='text-center text-white'>
                <h1 className='text-[2em]'>Jimmy Roland</h1>
                <p className='text-[#6E6E6F]'>Founder, Developer</p>
            </section>
        </div>
    )
}

export default Experts
