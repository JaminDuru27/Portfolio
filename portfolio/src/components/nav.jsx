import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiAdjustBrightness } from "react-icons/ti";

export function Nav({settogglesidebar, theme, setTheme}){
    return (
        <div className={`${theme===`dark`?``:`border-2 border-[#727172]`} fixed overflow-hidden nav z-[120] w-[80%] flex justify-between items-center left-1/2 translate-x-[-50%] top-2 backdrop-blur-2xl h-10 rounded-sm`}>
        {
            theme !== `dark`?
            <img 
            src="/profile.jpeg" alt="" 
            className=" w-10 h-full rounded-sm  outline-offset-2 " /> 
            :
            <img 
            src="/profile_dark.jpeg" alt="" 
            className=" w-10 h-full rounded-sm  outline-offset-2 " /> 
        }
        <div className={`${theme===`dark`?``:`text-[#ee0995]`} logo`}>@JaminDev</div>
        <div className="flex gap-x-2 px-2 items-center justify-between">
        <motion.div
        // onTouchStart={{rotate:`360deg`}}
        // onMouseDown={{rotate:`360deg`}}
        // onHoverStart={{rotate:`360deg`}}
        // whileTap={{rotate:`360deg`}}
        className="cursor-pointer "
        whileFocus={{rotate:`360deg`}}
        whileInView={{rotate:`360deg`}}
        >
            <TiAdjustBrightness 
            color={(theme === `dark`)?`#fff`:`000`} size={18} onClick={()=>{
                setTheme(prev=>(prev===`light`)?`dark`:`light`)

            }}/>
        </motion.div>
        <RxHamburgerMenu color={(theme === `dark`)?`#fff`:`000`} size={18} className="cursor-pointer md:hidden" onClick={()=>settogglesidebar(prev=>!prev)} />
        </div>
        </div>
    )
}