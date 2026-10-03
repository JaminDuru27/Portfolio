export function ImageCard3({title, src, tags=[], text, theme}){
    return (
        <div className="flex md:flex-row flex-col items-center gap-2 mt-5 h-fit py-10">
            <img src={src} className="w-[100%] md:w-[70%] " alt="" />
            <div className="w-[1-0%] p-2 flex  flex-col h-fit justify-between items-center gap-5 ">
                <h1 className="text-2xl text-center md:text-left">{title}</h1>
                <h2 className={`text-[.7rem] opacity-[.8]`}>{text}
                </h2>   
                <div className="tags my-5 flex flex-wrap text-[.5rem] gap-2 md:w-full md:justify-start uppercase">
                    {tags.map((tag, x)=>(
                        <div key={x} className={`${theme === `dark`?`border-[#fff]`:`border-[#000]`} p-2 border-2  rounded-sm `}>#{tag}</div>
                    ))}
                </div>

            </div>
        </div>
    )
}