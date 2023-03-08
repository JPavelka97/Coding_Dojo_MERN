import './App.css';
import PersonCard from './PersonCard.jsx';

function App() {
  return (
    <div className="App">
      <PersonCard lastName="Doe" firstName="Jane" age={42} haircolor="Black"/>
      <PersonCard lastName="Smith" firstName="John" age={88} haircolor="Brown"/>
      <PersonCard lastName="Fillmore" firstName="Millard" age={50} haircolor="Brown"/>
      <PersonCard lastName="Smith" firstName="Maria" age={62} haircolor="Brown"/>
    </div>
  );
}

export default App;
