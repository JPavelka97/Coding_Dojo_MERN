import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import ColorBox from "./components/ColorBox";



function App() {
    // const [color, setColor] = useState("");
    // const [width, setWidth] = useState(100);
    const [allboxes, setallboxes] = useState([])
    const newBox = (datacolor,datawidth) => {
      // setColor(datacolor);
      // setWidth(datawidth);
      console.log(datacolor,datawidth)
      setallboxes([...allboxes,{color:datacolor,width:datawidth}])
    };

    return (
        <div className="App">
            <h1>Bananas</h1>
            <Form newBox={newBox}/>
            <div className="boxes">
                {allboxes.map((item) => (
                    <ColorBox color={item.color} width={item.width}/>
                ))}
            </div>
        </div>
    );
}

export default App;
