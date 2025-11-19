
function Worker({img, textOne, textTwo, textThree}) {
    return (
        <div className="group w-[25%] h-[70vh] max-lg:w-[48%] max-sm:w-[100%] rounded-xl relative overflow-hidden">
            <div className="w-[100%] h-[100%]  hover:scale-[1.1]">
                <img
                    className="w-[100%] h-[100%] object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                    src={img} alt="" />
            </div>

            <article className="absolute bottom-0 w-[100%] h-[100%] flex flex-col justify-end pb-10 gap-5 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,2,6,0.61)_71%,rgba(0,2,6,0.69)_100%)] ">
                <h1 className="text-center text-2xl text-white capitalize">
                   {textOne} <i className="font-light">{textTwo}</i> {textThree}
                </h1>
                <button className="bg-[#4D61FF] font-medium text-white w-[50%] rounded-xl mx-auto p-1">more details</button>
            </article>
        </div>
    )
}

export default Worker
