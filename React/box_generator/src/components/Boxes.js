import React, { useState } from "react";
import styled from "styled-components";

const Boxes = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const generateBox = (color, width, height) => {
        setColor(color);
        setWidth(width);
        setHeight(height);
    };

    return <div></div>;
};

export default Boxes;
