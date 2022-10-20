import logo from './logo.svg';
import './App.css';
import {employees} from './data'
import Counter from './components/Counter';

function App() {
  return (
    <div>{employees.map(e => <h3>{e.firstname}</h3>)}
        <div>{Counter()}</div>
    </div>
    
  );
}

export default App;
