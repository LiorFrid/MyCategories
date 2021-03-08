import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, } from "react-router-dom";
import Main from './Containers/Main';
function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>

  );
}

export default App;
