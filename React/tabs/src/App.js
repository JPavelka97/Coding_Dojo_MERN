
import './App.css';
import React, {useState} from "react";
import Tab from './components/tab'

function App() {
  const [allTabs, setAllTabs] = useState({label:"New Tab",tabContent:"Enter anything!"})
  const newTab = (label,tabContent) => {
    setAllTabs([...allTabs,{label:label,tabContent:tabContent}])  
  }
  return (
    <div className="App">
      <h1>test</h1>
      {allTabs.map((data) => (
            <Tab number={data.label} tabContent={data.tabContent} newTab={newTab}/>
      ))}
    </div>
  );
}

export default App;
