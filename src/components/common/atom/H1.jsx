const H1 = ( props ) => {

    const { text } = props
    return (
        <h1 className="font-bold text-lg xl:text-4xl text-black leading-normal">{ text }</h1>
    )

}

export default H1
