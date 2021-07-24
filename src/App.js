import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RoutePage from './pages/route';
function App() {
    return (
      <>
       <BrowserRouter>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/test"><RoutePage /></Route>
        </Switch>
      </BrowserRouter>
      </>
    );
}

export default App;
