import 'assets/scss/style.scss'
import DetailPage from 'pages/DetailPage';
import LandingPage from 'pages/LandingPage';
import Checkout from 'pages/Checkout';
import Example from 'pages/Example';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={LandingPage}></Route>
        <Route exact path='/properties/:id' component={DetailPage}></Route>
        <Route path='/checkout' component={Checkout}></Route>
        <Route path='/example' component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
