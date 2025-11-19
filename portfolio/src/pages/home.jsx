import { SideNav } from "../components/Sidenav"
import {DiReact, DiMongodb, DiFirebase, DiCss3, DiHtml5} from 'react-icons/di'
import {SiCss3, SiHtml5, SiMongodb, SiTailwindcss, SiVite} from 'react-icons/si'
import { RiGithubLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import { ImageCard1 } from "../components/imgcard1"
import { ImageCard2 } from "../components/imhcard2"
import { ImageCard3 } from "../components/imagecard3"
import { useState } from "react"
import { Nav } from "../components/nav";
import { useNavigate } from "react-router-dom";
export function Home({theme, setTheme}){
    let [togglesidebar, settogglesidebar] = useState(false)
    const nav = useNavigate()
    return (
        <div className={`p-4 w-full text-[1rem] md:text-[120%] h-screen ${theme===`light`?`text-black`:`text-white`} overflow-auto`}>
        <SideNav theme={theme} toggle={togglesidebar} settoggle={settogglesidebar}/>          
        <Nav settogglesidebar={settogglesidebar} theme={theme} setTheme={setTheme}/>
        <div className="border-[#ffffff34] rounded-lg w-full  border-b-2 py-20 pb-10 ">
            <div className="w-full h-fit flex flex-col items-center justify-start">
                <img 
                style={{boxShadow: `8px 9px 21px -10px cyan, -6px 5px 21px -10px orange, 2px -6px 21px -10px #6e05ef`}}
                src="/profile.png" alt="" 
                className=" w-20 h-20 sm:w-50 sm:h-50 md:w-70 md:h-70  rounded-lg border-2 border-[#ffffff69]  outline-offset-2 " /> 
                <div 
                style={{
                    background: `linear-gradient(90deg, #ff6a00, #ee0995)`,
                    WebkitBackgroundClip: `text`,
                    WebkitTextFillColor: `transparent`,
                }}
                className="boldfont logo text-center text-[1.2rem] mt-6 ">Hi im Jamin</div>
                <div 
                style={{
                    background: `linear-gradient(90deg, #ff6a00, #ee0995)`,
                    WebkitBackgroundClip: `text`,
                    WebkitTextFillColor: `transparent`,
                }}
                className=" text-center text-[.7rem] mt-2 w-[70%] ">
                    Im a a profession webdeveloper and game developer. I can create Modern UIs and Web Pages with the latest Web Frameworks
                </div>
                <div className="links text-[.6rem] w-[50%]  h-10 my-5  flex justify-between items-center">
                    <a href="mailto:durugermaine207@gmail.com">
                        <MdOutlineEmail
                        size={20}
                        color={theme === `dark`?`white`:"black"}
                        className="cursor-pointer"
                        />
                    </a>
                    <a href="https://github.com/JaminDuru27">
                        <RiGithubLine
                        size={20}
                        color={theme === `dark`?`white`:"black"}
                        className="cursor-pointer"
                        />
                    </a>
                    <FaWhatsapp
                    onClick={()=>{}}
                    size={20}
                    color={theme === `dark`?`white`:"black"}
                    className="cursor-pointer"
                    />
                    
                </div>
                <a 
                style={{boxShadow: `8px 9px 21px -10px cyan, -6px 5px 21px -10px orange, 2px -6px 21px -10px #6e05ef`}}
                className="p-2 mt-10 text-[.7rem] rounded">Services</a>
            
            </div>

        </div>
        <ImageCard1 src='/design1.png' head='Need a Professional Website? Look No Futher' text='I can create beautiful Uis just like this in no time!' />
        <ImageCard1 src='/design2.png' head='Great UI/Ux designer' text='I can create beautiful Uis just like this in no time!' />
        <ImageCard1 src='/design3.png' head='Loves His Work' text='I can create beautiful Uis just like this in no time!' />
        <ImageCard1 src='/design5.png' head='Worked In Many Fields' text='I can create beautiful Uis just like this in no time!' />
        
        <div className="flex translate-x-[-50%] relative left-1/2 my-2 flex-wrap items-center w-[80%] justify-between gap-2">
                <DiReact size={50} color={theme === `dark`?"#fff":`#000`}/>
                <DiReact size={50} color={theme === `dark`?"#fff":`#000`}/>
                <DiHtml5 size={50} color={theme === `dark`?"#fff":`#000`}/>
                <DiCss3 size={50} color={theme === `dark`?"#fff":`#000`}/>
                <SiVite color={theme === `dark`?"#fff":`#000`} size={30}/>
                <SiMongodb size={50} color={theme === `dark`?"#fff":`#000`}/>
        </div>
        <div 
        style={{
            background: `linear-gradient(90deg, #ff6a00, #ee0995)`,
            WebkitBackgroundClip: `text`,
            WebkitTextFillColor: `transparent`,
        }}
        className="font-bold text-[1.8rem] my-10 w-[70%] translate-x-[-50%] text-center left-1/2 relative capitalize">
        Stylish Web Pages For You
        </div>
        <ImageCard2 src='/consulting-business-portfolio.jpg' title='Consulting And Analytics Web Pages' />
        <ImageCard2 src='/design-portfolio.jpg' title='I can design Portfolios' />
        <ImageCard2 src='/fitness-trainer-portfolio.jpg' title='Fitness Portfolios' />
        <ImageCard2 src='/healthcare-nursing-portfolio.jpg' title='HealthCare' />
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
        title= 'Instant Web Pages At Low Price'
        tags={[`development`,`UI/UX`]}
        text = {`
        get idjoj jq pqjppqjpd jpd qp jp qhjp jjj  ijji diu q uiq
        get idjoj jq pqjppqjpd jpd qp jp qhjp jjj  ijji diu q uiq
        get idjoj jq pqjppqjpd jpd qp jp qhjp jjj  ijji diu q uiq
        `}
        />

        <ImageCard3 
        theme={theme} 
        src="/education-teaching-portfolio.jpg" 
        title= 'Instant Web Pages At Low Price'
        tags={[`development`,`UI/UX`]}
        text = {`
        get idjoj jq pqjppqjpd jpd qp jp qhjp jjj  ijji diu q uiq
        get idjoj jq pqjppqjpd jpd qp jp qhjp jjj  ijji diu q uiq
        get idjoj jq pqjppqjpd jpd qp jp qhjp jjj  ijji diu q uiq
        `}
        />
        
        <div className="w-full py-2 h-70 sm:h-[80vh] md:h-[100vh] relative">
            <img src="/design6.png" alt="" className="blur-[3px] w-full h-full" />
            <div className="absolute top-0 right-0 w-[70%] text-right md:p-20">
                <h1 className="text-2xl my-2 text-[#04989a] sm:text-[200%] md:text-[250%]">I Design and Create</h1>
                <p className="text-[#0044f1] sm:my-2 md:my-5">with languages such add these</p>
                <div className=""></div>
                <div className="flex justify-end items-center my-2 gap-2 sm:my-4 md:my-10 ">
                    <DiMongodb 
                    color={(theme === `dark`)?"white":"#ee0995"} size={30}/>
                    <DiReact color={(theme === `dark`)?"white":"#ee0995"} size={30}/>
                    <SiVite color={(theme === `dark`)?"white":"#ee0995"} size={30}/>
                    <SiCss3 color={(theme === `dark`)?"white":"#ee0995"} size={30}/>
                    <SiTailwindcss color={(theme === `dark`)?"white":"#ee0995"} size={30}/>
                    <SiHtml5 color={(theme === `dark`)?"white":"#ee0995"} size={30}/>
                </div>
            </div>
        </div>
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