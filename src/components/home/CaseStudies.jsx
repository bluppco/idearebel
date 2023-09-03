import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const CaseStudies = () => {

    const [ currentIndex, updateIndex ] = React.useState(0)
    const [ direction, updateDirection ] = React.useState(null)
    const updateIndexClick = ( index ) => {

        updateDirection( ( index > currentIndex ) ? "top" : "bottom" )
        updateIndex( index )

    }
    const variants = {

        hiddenRight: {
            y: "100%",
            opacity: 0,
        },
        hiddenLeft: {
            y: "-100%",
            opacity: 0,
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <section className="bg-zinc-200 h-96 w-full relative flex items-center">
            <div className="bg-zinc-400 w-[10%] h-full flex flex-col gap-8 items-center justify-center">
                <div className="w-4 h-4 bg-black" onClick={ () => updateIndexClick(0) }></div>
                <div className="w-4 h-4 bg-black" onClick={ () => updateIndexClick(1) }></div>
                <div className="w-4 h-4 bg-black" onClick={ () => updateIndexClick(2) }></div>
                <div className="w-4 h-4 bg-black" onClick={ () => updateIndexClick(3) }></div>
            </div>
            <AnimatePresence>
                <motion.div className="w-[90%] h-full flex flex-col z-30 overflow-auto" initial={ direction === "top" ? "hiddenRight" : "visible" } animate="visible" variants={ variants } exit="exit">
                    <div className={`w-full h-full min-h-full`}>
                        <div className="bg-zinc-300 w-[80%] h-full">1</div>
                        <div className="bg-black/50 w-[30%] h-[80%] absolute right-0 top-[10%]">1</div>
                    </div>
                    <div className={`w-full h-full min-h-full`}>
                        <div className="bg-zinc-300 w-[80%] h-full">2</div>
                        <div className="bg-black/50 w-[30%] h-[80%] absolute right-0 top-[10%]">2</div>
                    </div>
                    <div className={`w-full h-full min-h-full`}>
                        <div className="bg-zinc-300 w-[80%] h-full">3</div>
                        <div className="bg-black/50 w-[30%] h-[80%] absolute right-0 top-[10%]">3</div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    )

}

export default CaseStudies
