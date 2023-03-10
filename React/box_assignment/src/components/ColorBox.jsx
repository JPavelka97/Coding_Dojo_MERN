import React from 'react'

const ColorBox = (props) => {
    return(
            <p style={{backgroundColor:props.color, width:props.width, height:100}} />
    )
}

export default ColorBox