import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePages/Home';
import Contact from './pages/Contact/ContactPage';
import {Navbar , Footer} from './components';

import {BrowserRouter as  Router,Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/Contact" exact component={Contact} />
       
      
       
     </Switch>
     <Footer />
     </Router>
    </div>
  );
}

export default App;
