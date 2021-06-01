import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navigation';
import Home from './components/Homepage/Home';
import About from './About';
import Footer from './components/Footer/Footer'


function App() {
  return (
     <Router>
     <Navbar />
       <Switch>

       <Route path='/' exact component={Home} />
       <Route path='/About'component={About} />
   
       </Switch>
         <Footer />
     </Router>
  );
}

export default App;
