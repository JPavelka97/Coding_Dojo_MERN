import React, { useState } from "react";

const Tab = (props) => {
    const [label, setLabel] = useState("")
    const [tabContent, setTabContent] = useState("")

    const handleTab = (e) => {
        e.preventDefault();
        props.newTab(label,tabContent)
    }

    return(
        <div>
            <h1>test</h1>
            <form onSubmit={handleTab}>
                <input onChange={(e) => setLabel(e.target.value)}> asdf{props.label}</input>
                <textarea onChange={(e) => setTabContent(e.target.value)} cols="30" rows="10" value={props.tabContent}></textarea>
                <button>Save Data</button>
            </form>
        </div>
    )
}



export default Tab