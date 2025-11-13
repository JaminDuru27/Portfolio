import { RxHamburgerMenu } from "react-icons/rx";
import { TiAdjustBrightness } from "react-icons/ti";

export function Nav({settogglesidebar, theme, setTheme}){
    return (
        <div className={`${theme===`dark`?``:`border-2 border-[#727172]`} nav z-10 w-[80%] flex justify-between items-center px-4 left-1/2 translate-x-[-50%] top-2 backdrop-blur-2xl h-10  fixed  rounded-sm`}>
        <div className={`${theme===`dark`?``:`text-[#ee0995]`} logo`}>JaminDev</div>
        <div className="flex gap-2 items-center justify-between">
        <TiAdjustBrightness color={(theme === `dark`)?`#fff`:`000`} size={18} onClick={()=>setTheme(prev=>(prev===`light`)?`dark`:`light`)}/>
        <RxHamburgerMenu color={(theme === `dark`)?`#fff`:`000`} size={18} className="cursor-pointer" onClick={()=>settogglesidebar(prev=>!prev)} />
        </div>
        </div>
    )
}