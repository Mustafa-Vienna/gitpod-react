import logo from './logo.svg';
import './App.css';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithCallback greetings="I'm from stateful class component" name="Mustafa" />
    </div>
  );
}

export default App;
