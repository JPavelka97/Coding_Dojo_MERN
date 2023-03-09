import React from 'react'

const ColorBox = (props) => {
    return(
        <div>
            <p style={{backgroundColor:props.color, width:props.width, height:100}} />
        </div>
    )
}

export default ColorBox