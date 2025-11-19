

function MissionCard({icon, titleBig, titleSmall, paragraph}) {
    return (
        <div className="bg-[#1B1E21] w-[32%]  max-lg:w-[100%]  flex items-center gap-4 px-5 py-8 rounded-lg transition ease-in-out border-b-3 border-b-[#1B1E21] hover:border-b-indigo-500">
            <p className="w-[60px] h-[60px] rounded-[50px] rounded-br-none bg-[#4D61FF] flex items-center justify-center text-[2em] text-white font-bold ">
               {icon}
            </p>

            <article>
                <p className="font-bold text-[1.2em] text-white">{titleBig} <i className="font-light">{titleSmall}</i></p>
                <small className="text-[#6E6E6F]">{paragraph}</small>
            </article>
        </div>
    )
}

export default MissionCard
