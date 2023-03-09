import { useState } from "react";
import React from "react";

const Form = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState(100);

    const handleColor = (e) => {
        e.preventDefault();
        props.newBox(color,width);
        setColor("");
        setWidth(100);
    };

    return (
        <div>
            <form onSubmit={handleColor}>
                <div>
                    <label>Color: </label>
                    <input
                        type="text"
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                        id="color"
                    />
                </div>
                <div>
                    <label>Width: </label>
                    <input
                        type="number"
                        onChange={(e) => setWidth(parseInt(e.target.value))}
                        value={width}
                        id="width"
                    />
                </div>
                <div>
                    <label>Height: </label>
                    <input type="text" />
                </div>
                <button>Create Box</button>
            </form>
        </div>
    );
};

export default Form;
