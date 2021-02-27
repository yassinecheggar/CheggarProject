import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePages/Home';
import Contact from './pages/Contact/ContactPage';
import Services from './pages/Services/Services';
import AboutPage  from  './pages/AboutPages/AboutPage';
import {Navbar , Footer} from './components';
import {BrowserRouter as  Router,Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        <ScrollToTop />
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/Contact" exact component={Contact} />
       <Route path="/Service" exact component={Services} />
       <Route path="/About" exact component={AboutPage} />
       
      
       
     </Switch>
     <Footer />
     </Router>
    </div>
  );
}

export default App;
