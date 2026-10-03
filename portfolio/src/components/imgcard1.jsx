export function ImageCard1({src, bgsrc, head, text}){
    return (
        <>
        <div className="w-full relative overflow-hidden py-20">
            <div className="rounded-lg absolute w-full  right-0 z-[0]  rounded ">
                <div className="w-full absolute z-[1] h-full bg-black/90"></div>
                <img    
                className="w-full h-full"
                src={bgsrc} alt="" />
            </div>
            <img src={src} className="w-50  h-50 rounded-[50%] z-10 mt-20 relative left-1/2 translate-x-[-50%]" alt="" />
            <div className="w-full text-center justify-center z-20 items-center flex flex-col ">
                <div className=" z-20 text-[1.8rem] mt-5 w-[70%] shrink-0 font-bold text-center">{head} </div>
                <div className=" z-20 text-[.72rem]  py-5 pb-10  opacity-[.8] shrink-0 w-[70%] font-bold text-center">
                    {text} 
                </div>
            </div>
        </div>
        </>
    )
}