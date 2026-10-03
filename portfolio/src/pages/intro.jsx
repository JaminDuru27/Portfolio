import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";

export function Intro({theme, open}){
    return (
        <motion.div 
        initial={{opacity:0, display:`none`, }}
        animate={!open?{opacity:1, display:`flex`}:null}
        transition={{duration:1}}
        className="bg-black flex w-full absolute z-[200] h-[100vh]  overflow-hidden  items-center justify-center">
                <div className="flex w-full absolute h-full top-0 left-0">
                    <Run theme={theme} dir={`down`}/>
                     <div className="hidden lg:flex w-full">
                        <Run theme={theme} dir={`up`}/>
                        <Run theme={theme} dir={`down`}/>
                        <Run theme={theme} dir={`up`}/>
                     </div>
                </div>                
                <img 
                src="design5.png" 
                className="absolute top-1/2 min-w-[400px] min-h-[400px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                alt="" />
                <div className="flex flex-col  p-2 backdrop-blur-2xl rounded-lg gap-x-2 items-center justify-center">
                    <motion.img 
                    initial={{marginTop: `100px`}}
                    animate={{marginTop: `0`}}
                    transition={{delay:1}}
                    src="/profile.jpeg" 
                    className="w-20 h-20 rounded-[50%] relative "
                    alt="Profile " />            
                    <motion.div 
                    initial={{display:`none`, width: 0, height: 0}}
                    animate={{display: `flex`,  width: `fit-content`, height: `fit-content`}}
                    transition={{delay: 2}}
                    className=" flex items-center text-white overflow-hidden gap-y-2 flex-col">
                        <div className="text-">@JaminDev</div>
                        <div className="">Build modern websites</div>
                    </motion.div>
                </div>

        </motion.div>
    )
}

function Run ({theme, dir=`down`}){
    return (
        <motion.div 
        animate={{translateY: dir === `down`?-200: 200}}
        transition={{duration:10}}
        className="w-full lg:w-1/3 h-full grid md:grid-cols-20 lg:grid-cols-22 gap-2 relative top-[-200px] auto-rows-[40px] gap-1 p-2 [grid-auto-flow:dense] p-2">
            {
                (Array.from({length: 50}).map((_, index) => {
                    const delay = index * 0.02; // Delay for each square
                    const w= Math.max(Math.floor(Math.random() * 7) + 1, 3); // Random width between 1 and 3
                    const h= Math.max(Math.floor(Math.random() * 6) + 1, 2); // Random height between 1 and 3
                    return (
                        <motion.div 
                        key={index}
                        initial={{opacity:0, }}
                        animate={{opacity:1, }}
                        style={{gridColumn: `span ${w}`, gridRow: `span ${h}`}}
                        transition={{duration:.1, delay
                            
                        }}
                        className="w-full h-full border-2 border-white/20 rounded-lg"
                        >
                        </motion.div>
                    )
                }))
            }
        </motion.div> 
    )
}