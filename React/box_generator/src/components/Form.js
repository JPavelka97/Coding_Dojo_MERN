import React, { useState } from 'react';
import styled from 'styled-components';

const ColorForm = (props) => {



    const handleBox = (e) => {
        e.preventDefault();
        const newBox = { color, width, height }
        props.value
        const ColorBox = styled.div`
        background: ${newBox => newBox.color};
        width: ${newBox => newBox.width || '120px'};
        height: ${newBox => newBox.height || '120px'};
    `
    }



    return(
        <form onSubmit={generateBox}>
            <label>Color:</label>
            <input type="text" name="color" onChange={ (e) => setColor(e.target.value) } value= {color}/>
            <label >Height:</label>
            <input type="text" name="height"/>
            <label htmlFor="Width">Width:</label>
            <input type="text" name="width"/>
            <button type='submit' value='generate box'>Generate Box</button>
        </form>
    )
}
}
export default ColorForm