import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';


function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greetings="Nice to meet you" name="Mustafa" job="Developer"/>
    </div>
  );
}

export default App;
