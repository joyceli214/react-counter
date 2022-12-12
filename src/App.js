import logo from './logo.svg';
import './App.css';
import Counter from './features/Counter';
import CounterGroup from './features/CounterGroup';

function App() {
  return (
    <div className="App">
      <h1>counter</h1>
      <CounterGroup size={3}/>
    </div>
  );
}

export default App;
