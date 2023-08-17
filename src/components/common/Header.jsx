import React from "react"
import { useInView } from "framer-motion"
import { Link } from "react-scroll"

import H1 from "./atom/H1.jsx"
import Paragraph from "./atom/Paragraph.jsx"
const Header = ( props ) => {

    const {

        cover,
        extra_content_flag,
        extra_content_link,
        extra_content,
        not_cover,
        subtitle,
        title,
        video_flag,
        video,

    } = props
    const headerRef = React.useRef( null )
    const isInView = useInView( headerRef )
    const [ switchIt, updateSwitchIt ] = React.useState( false )
    const [ displayNavigation, updateDisplayNavigation ] = React.useState( false )

    React.useEffect( () => {

        updateSwitchIt( isInView )

    }, [ isInView ])

    return (
        <div ref={ headerRef } className="relative">
            {

                typeof cover !== "undefined" &&
                <section className={`${ not_cover ? "h-[60vh] min-h-[400px]" : "h-screen"} w-full bg-cover bg-center flex justify-center items-center bg-zinc-200 z-10`}>
                    <div className="absolute w-full h-full top-0 left-0 bg-zinc-200">
                        {

                            typeof video_flag !== "undefined" && video_flag &&
                            <video
                                loop={ true }
                                autoPlay={ true }
                                muted={ true }
                                playsInline={ true }
                                preload="auto"
                                className="h-full w-full object-cover"
                            >
                                <source src={ video } type="video/mp4"/>
                            </video>
                        }
                        {

                            (typeof video_flag === "undefined" || !video_flag ) &&
                            <img
                                src={ cover }
                                className="w-full h-full object-cover"
                            />

                        }
                    </div>
                    <div className="p-10 bg-white text-center grid gap-8 max-w-[80%] xl:max-w-[30%] z-20">
                        <H1
                            text={ title }
                        />
                        {

                            typeof subtitle !== "undefined" && subtitle !== null &&
                            <Paragraph
                                text={ subtitle }
                            />

                        }
                    </div>
                    {

                        extra_content_flag &&
                        <div className="absolute bottom-40">
                            <a href={ extra_content_link } className="flex flex-col items-center justify-center">
                                {

                                    extra_content.map( ( content, content_index ) => {

                                        return (
                                            <div className="relative group w-fit text-center !z-30 cursor-pointer" key={ "extra_content" + content_index }>
                                                <div className="text-white font-larsseit text-xl uppercase tracking-widest">{content}</div>
                                                <span className="absolute bg-ir_green h-1.5 w-full bottom-1 left-0 group-hover:h-4 !-z-20 transition-height duration-200 ease-in"></span>
                                            </div>

                                        )

                                    })

                                }

                            </a>
                        </div>

                    }
                    {/* DOWN ARROW FOR MORE CONTENT */}
                    <Link to="content" smooth={true} duration={500}>
                        <div className={`${not_cover? "bottom-5": "bottom-10"} w-10 h-10 absolute left-[50%] -ml-5 cursor-pointer`}>
                            <img
                                src="/icons/arrow-down.svg"
                                className="w-full h-full object-fill"
                            />
                        </div>
                    </Link>
                </section>

            }
            {

                typeof cover === "undefined" &&
                <section className={`${ not_cover ? "h-[60vh] min-h-[400px]" : "h-screen"} w-full bg-cover bg-center flex justify-center items-center bg-black z-10`}>
                    <div className="p-10 bg-white text-center grid gap-8 max-w-[80%] xl:max-w-[30%] z-20">
                        <H1
                            text={ title }
                        />
                        {

                            typeof subtitle !== "undefined" && subtitle !== null &&
                            <Paragraph
                                text={ subtitle }
                            />

                        }
                    </div>
                </section>

            }
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
                    <div className="w-8 h-8">
                        <img
                            src={ switchIt ? "/icons/menu.svg" : "/icons/menu-black.svg"}
                            className="object-fit h-full w-full"
                        />
                    </div>
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
                        <div className="w-8 h-8">
                            <img
                                src="/icons/close.svg"
                                className="object-fit h-full w-full"
                            />
                        </div>
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
