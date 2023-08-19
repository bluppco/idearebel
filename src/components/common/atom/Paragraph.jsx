const Paragraph = ( props ) => {

    const { text } = props
    return (
        <p className="text-lg xl:text-xl font-karla text-black">{ text }</p>
    )

}

export default Paragraph
