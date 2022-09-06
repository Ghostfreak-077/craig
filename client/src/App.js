import logo from './logo.svg';
import './App.css';
import './styles/main.css'
import Header from './components/Header';
import TaskDock from './components/TaskDock';
import ReactRulesBust from './ReactRulesBust';

function App() {
  return (
    <div className="App">
      <ReactRulesBust/>
    </div>
  );
}

export default App;
