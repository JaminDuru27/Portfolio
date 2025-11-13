import { motion } from "framer-motion"
import { useRef } from "react"

export function ImageCard2({title, src}){
    const bib = useRef(null)
    const pic  = useRef(null)
    const effectref = useRef(`grayscale(1)`)
    return (
        <motion.div
        style={{filter:`blur(20px)`,}} 
        whileInView={{filter:`blur(0px)`}}
        onPointerMove={(e)=>{
            const bound = pic.current.getBoundingClientRect()
            const offx= e.clientX - bound.x 
            const offy= e.clientY - bound.y
            bib.current.style.left = `${offx - bib.current.clientWidth/2}px`
            bib.current.style.top = `${offy - bib.current.clientHeight/2}px`
        }}
        onPointerEnter={()=>{
            bib.current.style.display = `flex`
        }}
        onPointerLeave={(e)=>{
            bib.current.style.display = `none`
        }}
        
        className="card w-[60vw] relative left-1/2 translate-x-[-50%] h-fit mb-8  rounded outline-2 outline-[#ffffff76] relative outline-offset-2">
            <img src={src} 
            ref={pic}
             className="w-full h-full rounded-sm" alt="" />
            <div className="  backdrop-blur-2xl w-fill h-fit  my-4 pb-5 text-center capitalize">
                <h1>{title}</h1>
            </div>
            <div 
            style={{backdropFilter: effectref.current}}
            ref={bib}
            className="z-[1] circle w-50 h-50 absolute border-2 border-[#ffffff28] rounded-[50%] top-0 left-0"></div>
        </motion.div>
    )
}