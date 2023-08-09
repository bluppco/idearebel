import React from "react"
import { useInView } from "framer-motion"

// import { H1 } from "./atom/H1.astro"
const Header = () => {

    const headerRef = React.useRef( null )
    const isInView = useInView( headerRef )
    const [ switchIt, updateSwitchIt ] = React.useState( false )

    React.useEffect( () => {

        updateSwitchIt( isInView )

    }, [ isInView ])

    return (
        <div ref={ headerRef } className="block">
            <section className="bg-home w-full h-screen bg-cover bg-center flex justify-center items-center bg-zinc-200 z-10">
                <div className="p-10 bg-white text-center grid gap-8">
                    {/* <H1
                        text="Idea Rebel"
                    /> */}
                </div>
            </section>
            <div className="!fixed p-8 flex justify-between w-full z-20 top-0 left-0">
                <div className={`${ switchIt ? "text-white" : "text-black" } duration-200`}>
                    <div className="w-6 h-6">
                        <img
                            src={ switchIt ? "/nav-ir-logo-white.png" : "/nav-ir-logo-black.png"}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className={`${ switchIt ? "bg-white" : "bg-black" } duration-200 w-8 h-1`}/>
                    <div className={`${ switchIt ? "bg-white" : "bg-black" } duration-200 w-8 h-1`}/>
                    <div className={`${ switchIt ? "bg-white" : "bg-black" } duration-200 w-8 h-1`}/>
                </div>
            </div>
        </div>

    )

}

export default Header
