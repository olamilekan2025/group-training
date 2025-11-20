
import MissionCard from './MissionCard'
import { IoMdCheckmark } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
import { IoMdPersonAdd } from "react-icons/io";
import MissionText from './MissionText';
import Worker from './Worker';
import Experts from './Experts';
import OurServices from '../Services_page/OurServices';

function Mission() {
    return (
        <>
            <div className='w-full h-auto bg-[#151719] px-[5em] py-[7em] max-lg:px-[1em] max-lg:py-[3em]'>
                <div className='flex justify-between items-center  max-lg:flex-wrap  max-lg:gap-2 relative'>
                    <MissionCard
                        icon={<IoMdCheckmark />}
                        titleBig='SMART'
                        titleSmall='SOLUTIONS'
                        paragraph='Providing Excellent Candidates'
                    />
                    <MissionCard
                        icon={<HiSpeakerphone />}
                        titleBig='BEST'
                        titleSmall='OFFERS'
                        paragraph='Starting Small Business'
                    />
                    <MissionCard
                        icon={<IoMdPersonAdd />}
                        titleBig='FRIENDLY'
                        titleSmall='SUPPORT'
                        paragraph='Experienced Consultants'
                    />
                </div>
                <MissionText />
                <div className='flex gap-5 max-lg:justify-center max-lg:flex-wrap'>
                    <Worker
                        img={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1763558705/daniil-onischenko-E5RlQCeMKes-unsplash_pqkvyk.jpg'}
                        textOne='very'
                        textTwo='useful element'
                        textThree='for perfect flow'
                    />

                    <Worker
                        img={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1763558710/kalos-skincare-uHCrVTaZ-o0-unsplash_w4ldh3.jpg'}
                        textOne='live'
                        textTwo='customers'
                        textThree='for theme options'
                    />


                    <Worker
                        img={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1763558707/sithamshu-manoj-bik_lIl9Nco-unsplash_vyaerq.jpg'}
                        textOne='tons of'
                        textTwo='presets'
                        textThree='for bage builder'
                    />

                    <Worker
                        img={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1763558706/mina-rad-3norN7P7aKI-unsplash_qgjcvm.jpg'}
                        textOne='friendly'
                        textTwo='support'
                        textThree='up to 6 months'
                    />
                </div>

            </div>
           <OurServices />
            <div className='w-full h-auto bg-[#151719] px-[5em] py-[7em] max-lg:px-[1em] max-lg:py-[3em]'>
                <h1 className='text-[3em] text-center text-white'>Our <i className='font-light'>Expert</i> Team</h1>
                <div className='flex gap-5 max-lg:justify-center max-lg:flex-wrap'>
                    <Experts
                        img={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1763562728/mohamad-khosravi-Uw3OfKz2J-0-unsplash_doalgu.jpg'}
                    />

                    <Experts
                        img={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1763562727/gregory-hayes-AjJsc0hk9s0-unsplash_dsphpl.jpg'}
                    />

                    <Experts
                        img={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1763562727/jeremy-mcgilvrey-Mum-4dB0VsE-unsplash_nmd6a8.jpg'}
                    />

                    <Experts
                        img={'https://res.cloudinary.com/dxe5unu0u/image/upload/v1763562728/mohamad-khosravi-Uw3OfKz2J-0-unsplash_doalgu.jpg'}
                    />
                </div>
            </div>
        </>
    )
}

export default Mission
