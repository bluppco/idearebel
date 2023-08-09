import React from "react"
import { useInView } from "framer-motion"

// import { H1 } from "./atom/H1.astro"
const Header = ( props ) => {

    const headerRef = React.useRef( null )
    const isInView = useInView( headerRef )
    const [ switchIt, updateSwitchIt ] = React.useState( false )
    const [ displayNavigation, updateDisplayNavigation ] = React.useState( false )
    React.useEffect( () => {

        updateSwitchIt( isInView )

    }, [ isInView ])
    const { background } = props

    return (
        <div ref={ headerRef } className="block">
            <section className={`${ background } w-full h-screen bg-cover bg-center flex justify-center items-center bg-zinc-200 z-10`}>
                <div className="p-10 bg-white text-center grid gap-8">
                    {/* <H1
                        text="Idea Rebel"
                    /> */}
                </div>
            </section>
            <div className={`${ displayNavigation ? "-z-10 opacity-0" : "z-30 opacity-100" } fixed p-8 flex justify-between w-full z-20 top-0 left-0 duration-200 ease-in transition`}>
                <div className={`${ switchIt ? "text-white" : "text-black" }`}>
                    <a href="/">
                        <div className="w-6 h-6">
                            <img
                                src={ switchIt ? "/nav-ir-logo-white.png" : "/nav-ir-logo-black.png"}
                            />
                        </div>
                    </a>
                </div>
                <div className="flex flex-col gap-2" onClick={ () => updateDisplayNavigation( true )}>
                    <div className={`${ switchIt ? "bg-white" : "bg-black" } duration-200 w-8 h-1`}/>
                    <div className={`${ switchIt ? "bg-white" : "bg-black" } duration-200 w-8 h-1`}/>
                    <div className={`${ switchIt ? "bg-white" : "bg-black" } duration-200 w-8 h-1`}/>
                </div>
            </div>
            <div className={`${ displayNavigation ? "z-30 opacity-100": "-z-10 opacity-0" } fixed w-full h-screen bg-black left-0 top-0 duration-200 ease-in transition`}>
                <div className="!fixed p-8 flex justify-between w-full z-20 top-0 left-0">
                    <div className={`${ switchIt ? "text-white" : "text-black" } duration-200`}>
                        <div className="w-6 h-6">
                            <img
                                src={ switchIt ? "/nav-ir-logo-white.png" : "/nav-ir-logo-black.png"}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2" onClick={ () => updateDisplayNavigation( false )}>
                        <div className="font-bold text-4xl text-white">x</div>
                    </div>
                </div>
                <div className="flex items-center justify-center h-screen">
                    <div className="flex flex-col gap-12 w-48 items-center">
                        <a href="/digital-portfolio">
                            <div className="text-white text-4xl font-bold hover:underline underline-offset-[12px] cursor-pointer">Work</div>
                        </a>
                        <a href="/digital-marketing-agency">
                            <div className="text-white text-4xl font-bold hover:underline underline-offset-[12px] cursor-pointer">About</div>
                        </a>
                        <a href="/digital-services">
                            <div className="text-white text-4xl font-bold hover:underline underline-offset-[12px] cursor-pointer">Services</div>
                        </a>
                        <a href="/careers">
                            <div className="text-white text-4xl font-bold hover:underline underline-offset-[12px] cursor-pointer">Careers</div>
                        </a>
                        <a href="/creative-ideas">
                            <div className="text-white text-4xl font-bold hover:underline underline-offset-[12px] cursor-pointer">Ideas</div>
                        </a>
                        <a href="/agency-contact">
                            <div className="text-white text-4xl font-bold hover:underline underline-offset-[12px] cursor-pointer">Contact</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Header
