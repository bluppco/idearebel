import { motion, useScroll, useTransform } from "framer-motion"
import React from "react";

const Header = () => {

    const headerRef = React.useRef( null )
    const { scrollYProgress } = useScroll({ target: headerRef });
    const colorAnim = useTransform(scrollYProgress, [0, 0.1, 1], ["#fff", "#555", "#000"])

    return (

        <header className="fixed p-8 flex justify-between w-full" ref={ headerRef }>
            <motion.div>
                <motion.p
                    style={{ color: colorAnim }}
                >a</motion.p>
            </motion.div>
            <div className="flex flex-col gap-2">
                <div className="!bg-white w-12 h-2"/>
                <div className="bg-white w-12 h-2"/>
                <div className="bg-white w-12 h-2"/>
            </div>
        </header>

    )

}

export default Header
