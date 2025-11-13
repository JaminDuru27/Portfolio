export function ImageCard1({src, head, text}){
    return (
        <>
        <img src={src} className="w-20 h-20 rounded-[50%] mt-20 relative left-1/2 translate-x-[-50%]" alt="" />
        <div className="w-full text-center justify-center items-center flex flex-col ">
            <div className=" text-[1.2rem] mt-5 w-[70%] shrink-0 font-bold text-center">{head} </div>
            <div className=" text-[.72rem]  py-5 pb-10  opacity-[.8] shrink-0 w-[70%] font-bold text-center">
                {text} 
            </div>
        </div>
        </>
    )
}