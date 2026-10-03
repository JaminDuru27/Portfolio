import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { FaHome, FaLaptopCode, FaPhone, FaUser } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export function SideNav({toggle, theme}){
    const nav = useNavigate()
    return (
        <>

        <motion.div 
        animate={{left:(toggle)?`0%`:null}}
        transition={{type:`spring`, stiffness:50, }}
        style={{boxShadow: `0px 0px 12px -6px #000`}}
        className="backdrop-blur-[9px] md:hidden z-20 w-[10rem] flex justify-start  items-center flex-col p-6 py-10 h-[100vh] fixed top-1/2 translate-y-[-50%] left-[-100%]  rounded-sm">
            {
                theme !== `dark`?
                <img 
                src="/profile.jpeg" alt="" 
                className="w-20 h-20 rounded-[50%] outline-2 outline-[#ffffff1f] outline-offset-2 " /> 
                :
                <img 
                src="/profile_dark.jpeg" alt="" 
                className="w-20 h-20 rounded-[50%] outline-2 outline-[#ffffff1f] outline-offset-2 " /> 
            }
            <div className="logo w-full text-center text-[1.4rem] mt-3">Jamin</div>
            <div className="text-[.7rem] w-full text-center">Web Developer</div>
            <nav className="w-full py-2  mt-6 relative">
                <li className=" flex flex-col w-full">
                    <div 
                    onClick={()=>nav(`/`)}
                    className="cursor=pointer w-full p-2 border-2 rounded-sm border-[#ffffff27] backdrop-blur-[2px] mb-4 text-[.7rem]">Home</div>
                    <div 
                    onClick={()=>nav(`/About`)}
                    className="cursor=pointer w-full p-2 border-2 rounded-sm border-[#ffffff27] backdrop-blur-[2px] mb-4 text-[.7rem]">About</div>
                    <div 
                    onClick={()=>nav(`/Contact`)}
                    className="cursor=pointer w-full p-2 border-2 rounded-sm border-[#ffffff27] backdrop-blur-[2px] mb-4 text-[.7rem]">Contact</div>
                    <div 
                    onClick={()=>nav(`/Services`)}
                    className="cursor=pointer w-full p-2 border-2 rounded-sm border-[#ffffff27] backdrop-blur-[2px] mb-4 text-[.7rem]">Services</div>
                </li>
            </nav>
        </motion.div>
        <div className="p-2 bg-[#ee0995]/10 hidden  md:flex  rounded-lg flex-col bg-white/10 fixed z-[100] top-1/2 left-10 translate-y-[-50%] flex items-center gap-y-4">
            {[
                {icon:FaHome, url:`/`},
                {icon:FaUser, url:`/About`},
                {icon:FaPhone, url:`/Contact`},
                {icon:FaLaptopCode, url:`/Services`},
            ].map(({icon, url}, k)=>{
                const Icon = icon
                return(
                    <motion.div 
                    key={k}
                    initial={{opacity: 0, translateY: -10}}
                    animate={{opacity: 1, translateY: 0}}
                    transition={{delay: k * 0.2}}
                    whileHover={{translateY:-5}}
                    onClick={()=>{nav(url)}}
                    className="p-2 flex items-center rounded-full bg-[#ee0995]/10 cursor-pointer justify-center text-[#ee0995]"
                    >
                        <Icon/>
                    </motion.div>
                )
            })}

        </div>
        </>
    )
}