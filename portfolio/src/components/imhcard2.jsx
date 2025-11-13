export function ImageCard2({title, src}){
    return (
        <div className="card w-[60vw] relative left-1/2 translate-x-[-50%] h-fit mb-8  rounded outline-2 outline-[#ffffff76] relative outline-offset-2">
            <img src={src} className="w-full h-full rounded-sm" alt="" />
            <div className="  backdrop-blur-2xl w-fill h-fit  my-4 pb-5 text-center capitalize">
                <h1>{title}</h1>
            </div>
        </div>
    )
}