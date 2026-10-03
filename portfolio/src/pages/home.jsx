import { SideNav } from "../components/Sidenav"
import {DiReact, DiMongodb, DiFirebase, DiCss3, DiHtml5} from 'react-icons/di'
import {SiCss3, SiHtml5, SiMongodb, SiSupabase, SiTailwindcss, SiVite} from 'react-icons/si'
import { RiGithubLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { ImageCard1 } from "../components/imgcard1"
import { ImageCard2 } from "../components/imhcard2"
import { ImageCard3 } from "../components/imagecard3"
import { useEffect, useState } from "react"
import { Nav } from "../components/nav";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Intro } from "./intro";
export function Home({theme, setTheme}){
    let [togglesidebar, settogglesidebar] = useState(false)
    let [open, setOpen] = useState(false)
    const nav = useNavigate()
    const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
    };
    const letter = {
    hidden: { visibility: 0 },
    visible: { visibility: 1, transition: { duration: 1 } },
    };
    useEffect(()=>{
        setTimeout(()=>{
            setOpen(true)
        }, 4000)
    }, [])
    if(!open){
        return <Intro theme={theme} open={open}/>
    }
    else return (
        <div className={`p-4 w-full text-[1rem] md:text-[120%] h-screen ${theme===`light`?`text-black`:`text-white`} overflow-auto`}>
        <SideNav theme={theme} toggle={togglesidebar} settoggle={settogglesidebar}/>          
        <Nav settogglesidebar={settogglesidebar} theme={theme} setTheme={setTheme}/>
        <div className="border-[#ffffff34] relative rounded-lg w-full  border-b-2 py-20 pb-10 ">
            <div className="w-full h-fit flex flex-col  items-center justify-start">
                {
                    theme !== `dark`?
                    <img 
                    src="/profile.jpeg" alt="" 
                    className=" w-full h-full  rounded-lg border-2 border-[#ffffff69]  outline-offset-2 " /> 
                    :
                    <img 
                    src="/profile_dark.jpeg" alt="" 
                    className=" w-full h-full  rounded-lg border-2 border-[#ffffff69]  outline-offset-2 " /> 
                }
                <div className="absolute top-[60%] flex flex-col  lg:gap-y-6 md:gap-y-4  left-4 w-[80%]  ">
                    <motion.p 
                    transition={{duration:2}}
                    initial="hidden"  
                    whileInView="visible"
                    viewport={{once: true, amount:.5}}
                    variants={container}
                    style={{
                        background: `linear-gradient(90deg, #ff6a00, #ee0995)`,
                        WebkitBackgroundClip: `text`,
                        WebkitTextFillColor: `transparent`,
                    }}
                    className="boldfont logo text-[1rem]  lg:text-[3.5rem]  md:text-[2.5rem] mt-6 ">
                        {"Hi im Germaine Duru".split("").map((char, i) => (
                            <motion.span key={i} variants={letter}>
                            {char}
                            </motion.span>
                        ))}
                    </motion.p>
                    <div 
                    style={{
                        background: `linear-gradient(90deg, #ff6a00, #ee0995)`,
                        WebkitBackgroundClip: `text`,
                        WebkitTextFillColor: `transparent`,
                    }}
                    className=" text-[.5rem] lg:text-[1.7rem] md:text-[1.2rem] sm:text-[.7rem] md:mt-2 w-[70%] ">
                        Im a  professional Web  Developer. I can create Modern UIs and Web Pages with the latest Web Frameworks
                    </div>
                    <div className="flex w-fit  md:gap-y-2 gap-x-2 items-center md:flex-col md:my-5 sm:my-1">
                        <div className="links  lg:text-[3.6rem] md:text-[2.6rem] text-[1rem] text-black h-10  flex gap-x-2 items-center">
                            <a href="mailto:durugermaine207@gmail.com">
                                <MdOutlineEmail
                                color={theme === `dark`?`white`:"black"}
                                className="cursor-pointer"
                                />
                            </a>
                            <a href="https://github.com/JaminDuru27">
                                <RiGithubLine
                                color={theme === `dark`?`white`:"black"}
                                className="cursor-pointer"
                                />
                            </a>
                            <FaWhatsapp
                            onClick={()=>{}}
                            color={theme === `dark`?`white`:"black"}
                            className="cursor-pointer"
                            />
                            
                        </div>
                        <a 
                        onClick={()=>{
                            nav(`/services`)
                        }}
                        style={{boxShadow: `8px 9px 21px -10px cyan, -6px 5px 21px -10px orange, 2px -6px 21px -10px #6e05ef`}}
                        className="p-2 text-[.7rem] w-full cursor-pointer rounded">Services</a>
                    
                    </div>
                </div>
            </div>

        </div>
        <ImageCard1 src='/design1.png' bgsrc='/design-portfolio.jpg' head='Need a Professional Website? Look No Futher' text='I can create beautiful Uis just like this in no time!' />
        <ImageCard1 src='/design2.png' bgsrc='/modeling-portfolio.jpg' head='Great UI/Ux designer' text='I can create beautiful Uis just like this in no time!' />
        <ImageCard1 src='/design3.png' bgsrc='/music-artist-portfolio.jpg' head='Loves His Work' text='I can create beautiful Uis just like this in no time!' />
        <ImageCard1 src='/design5.png' bgsrc='/beauty-cosmetics-portfolio.jpg' head='Worked In Many Fields' text='I can create beautiful Uis just like this in no time!' />
        
        <div className="flex text-[2rem]  md:text-[5rem] lg:text-[7rem] py-10 translate-x-[-50%] relative left-1/2 my-2 md:flex-wrap items-center w-[80%] justify-between gap-2">
                <DiReact color={theme === `dark`?"#fff":`#000`}/>
                <SiSupabase color={theme === `dark`?"#fff":`#000`}/>
                <DiHtml5 color={theme === `dark`?"#fff":`#000`}/>
                <DiCss3 color={theme === `dark`?"#fff":`#000`}/>
                <SiVite color={theme === `dark`?"#fff":`#000`} size={30}/>
                <SiMongodb color={theme === `dark`?"#fff":`#000`}/>
                <SiTailwindcss color={theme === `dark`?"#fff":`#000`}/>
        </div>
        <div 
        style={{
            background: `linear-gradient(90deg, #ff6a00, #ee0995)`,
            WebkitBackgroundClip: `text`,
            WebkitTextFillColor: `transparent`,
        }}
        className="font-bold flex items-center flex-col gap-10 md:text-[2.8rem] text-[1.7rem] lg:text-[4.8rem] border-t-2 border-b-2 border-white/20 py-20 my-10 w-[70%] translate-x-[-50%] text-center left-1/2 relative capitalize">
            {<FaStar/>}
            
            Stylish Web Pages For You
            <div className=" text-[.7rem] md:text-[1.2rem] lg:text-[1.7rem] capitalize">get beautiful aesthetic websites</div>
            {<FaStar/>}
        </div>
        
        <ImageCard2 src='/consulting-business-portfolio.jpg' title='Consulting And Analytics Web Pages' />
        <ImageCard2 src='/design-portfolio.jpg' title='Portfolios' />
        <ImageCard2 src='/fitness-trainer-portfolio.jpg' title='Business Pages' />
        <ImageCard2 src='/healthcare-nursing-portfolio.jpg' title='SaaS Pages' />
        <div 
        style={{
            background: `linear-gradient(90deg, #ff6a00, #ee0995)`,
            WebkitBackgroundClip: `text`,
            WebkitTextFillColor: `transparent`,
        }}
        className="boldfont text-[1.8rem] my-10 w-[70%] mt-20 relative capitalize">
            Actualize Your Dreams
        </div>
        <div className="w-full rounded-lg overflow-hidden p-3 h-[70vh] my relative">
            <img src="/webdev.png" alt="" className="absolute w-full h-full top-0 left-0" />
            <div className={`${theme === `dark`?`text-dark`:`text-white`} text-[2.2rem] font-bold  p-5  capitalize absolute bg-[#000000f0] w-full h-full top-0 left-0`}>
                stand out and claim a website of your own</div>
        </div>
        
        <ImageCard3
        theme={theme} 
        src="/education-teaching-portfolio.jpg" 
        title= 'Instant Web Pages At Decent Price'
        tags={[`development`,`UI/UX`, `HTML`, `CSS`, `Responsive Design`, `Javascript`]}
        text = {`
        A responsive landing page designed and developed with HTML, CSS, and JavaScript. Focused on a clean modern layout, responsive design, clear call-to-action sections, and a smooth user experience across desktop and mobile devices.
        `}
        />

        <ImageCard3 
        theme={theme} 
        src="/fitness-trainer-portfolio.jpg" 
        title= 'Clean Deskop App  Builds, Built To Impress'
        tags={[`Desktop App`, `#TAURI`, `#DEVELOPMENT`,`#UI/UX`,`#RESPONSIVE` ,`#JAVASCRIPT`]}
        text = {`
            Fast, responsive desktop apps and built with care,
            Clean modern websites designed to stand out everywhere.
            From polished UI to responsive design,
            I turn your ideas into a web experience that shines.
        `}
        />
        
        <footer className="flex flex-col sm:flex-row sm:justify-between items-center justify-start w-full my-2 py-10 px-5">
            <div className="logo text-[1.5rem] sm:text-[1.7rem] md:text-[2.4rem]">Jamin Dev</div>
            <div className="text-[.7rem] mt-5 flex sm:items-end sm:text-[.8rem] md:text-[1.1rem] flex-col justify-between items-center">
                <div className ='cursor-pointer' onClick={()=>{nav(`/`)}}>Home</div>
                <div className ='cursor-pointer' onClick={()=>{nav(`/About`)}}>About</div>
                <div className ='cursor-pointer' onClick={()=>{nav(`/Contact`)}}>Contact</div>
                <div className ='cursor-pointer' onClick={()=>{nav(`/Services`)}}>Services</div>
            </div>
            <div className=" absolute left-0 bottom-0  w-full text-center text-[.5rem] text-[#ffffff84] capitalize mt-10">A reliable and efficient web builder</div>
        </footer>
        </div>
    )
}