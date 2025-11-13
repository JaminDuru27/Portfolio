import { motion } from "framer-motion"

export function SideNav({toggle, theme}){
    return (
        <motion.div 
        animate={{left:(toggle)?`0%`:null}}
        transition={{type:`spring`, stiffness:50, }}
        style={{boxShadow: `0px 0px 12px -6px #000`}}
        className="backdrop-blur-[9px] z-20 w-[10rem] flex justify-start  items-center flex-col p-6 py-10 h-[100vh] absolute top-1/2 translate-y-[-50%] left-[-100%]  rounded-sm">
            <img src="/profile.jpg" alt="" className="w-20 h-20 rounded-[50%] outline-2 outline-[#ffffff1f] outline-offset-2 " /> 
            <div className="logo w-full text-center text-[1.4rem] mt-3">Jamin</div>
            <div className="text-[.7rem] w-full text-center">Web Developer</div>
            <nav className="w-full py-2  mt-6 relative">
                <li className=" flex flex-col w-full">
                    <a href="/" className="w-full p-2 border-2 rounded-sm border-[#ffffff27] backdrop-blur-[2px] mb-4 text-[.7rem]">Home</a>
                    <a href="/" className="w-full p-2 border-2 rounded-sm border-[#ffffff27] backdrop-blur-[2px] mb-4 text-[.7rem]">About</a>
                    <a href="/" className="w-full p-2 border-2 rounded-sm border-[#ffffff27] backdrop-blur-[2px] mb-4 text-[.7rem]">Contact</a>
                    <a href="/" className="w-full p-2 border-2 rounded-sm border-[#ffffff27] backdrop-blur-[2px] mb-4 text-[.7rem]">Services</a>
                </li>
            </nav>
        </motion.div>
    )
}