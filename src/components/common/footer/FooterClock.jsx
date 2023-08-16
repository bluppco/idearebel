import React from "react"
import Clock from "react-clock"
import "react-clock/dist/Clock.css"

const FooterClock = ( props ) => {

    const {

        link,
        location,
        offset,
        temperature,

    } = props
    function isDST(d) {

        let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
        let jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
        return Math.max(jan, jul) !== d.getTimezoneOffset();

    }
    const getTime = () => {

        const date = new Date()
        const gmt = date.getTimezoneOffset()
        var offset_date = new Date(date.getTime() + gmt*60000)
        var local_time = new Date(offset_date.getTime() + offset*60000)
        const is_DST_enabled = isDST( local_time )
        if( !is_DST_enabled )
            local_time = new Date(local_time.getTime() + 60*60000)
        return local_time

    }
    const getHour = ( time ) => {

        var hours = time.getHours();
        var hours = (hours+24-2)%24;
        var mid='AM';
        if(hours == 0){

            hours=12

        } else if(hours>12) {

            hours=hours%12
            mid='PM'
        }
        return mid

    }
    const [ value, setValue ] = React.useState( getTime() )
    React.useEffect(() => {

        const interval = setInterval(() => setValue(getTime()), 1000)
        return () => {

            clearInterval( interval )

        }

    }, [])

    return (
        <a href={"/office/" + link} className="group">
            <div className="grid grid-col gap-8">
                <p className="text-white uppercase text-center font-larsseit group-hover:underline text-sm">{ location }</p>
                <div className="relative">
                    <Clock value={value} />
                    <div className="text-sm font-regular absolute top-[62.5px] right-[20px] z-20 text-ir_green">{ temperature }</div>
                    <div className="text-sm font-regular absolute bottom-[30px] right-[62.5px] z-20 text-ir_green">{ getHour( value ) }</div>
                </div>
            </div>
        </a>
    )

}

export default FooterClock
