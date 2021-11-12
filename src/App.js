import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import counterSlice from './reducers/counterSlice';


function App() {

  
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
