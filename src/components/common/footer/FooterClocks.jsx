import React from "react"
import FooterClock from "./FooterClock"

const FooterClocks = ( props ) => {

    const { footerToronto, footerVancouver, footerLosAngeles  } = props
    const [ weather, updateWeather ] = React.useState({

        los_angeles: "-",
        toronto: "-",
        vancouver: "-",

    })
    const fetchWeather = async () => {

        const data = await fetch("https://weather.blupp.co")
        const data_json = await data.json()
        updateWeather({

            los_angeles: data_json.data.los_angeles,
            toronto: data_json.data.toronto,
            vancouver: data_json.data.vancouver,

        })
        console.log( data_json.data )

    }
    React.useEffect( () => {

        fetchWeather()

    }, [])

    return (
        <section className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <FooterClock
                    link={ footerToronto?.frontmatter.link }
                    location={ footerToronto?.frontmatter.location }
                    offset={ footerToronto?.frontmatter.time_offset }
                    temperature={ weather.toronto }
                />
                <FooterClock
                    link={ footerVancouver?.frontmatter.link }
                    location={ footerVancouver?.frontmatter.location }
                    offset={ footerVancouver?.frontmatter.time_offset }
                    temperature={ weather.vancouver }
                />
                <FooterClock
                    link={ footerLosAngeles?.frontmatter.link }
                    location={ footerLosAngeles?.frontmatter.location }
                    offset={ footerLosAngeles?.frontmatter.time_offset }
                    temperature={ weather.los_angeles }
                />
            </div>
        </section>
    )

}

export default FooterClocks
