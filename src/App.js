import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Activity from './components/Activity/Activity';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App" >
      <Header></Header>
      <Activity></Activity>
      <Questions></Questions>
    </div>
  );
}

export default App;
