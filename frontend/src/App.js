import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Hospital from './components/Hospital'
import Hospitaldetail from './components/Hospitaldetail'
import Bloodbank from './components/Bloodbank'
import Bloodbankdetail from './components/Bloodbankdetail'
import Bookhospitaldone from './components/Bookhospitaldone'
import Bookbloodbankdone from './components/Bookbloodbankdone'
import Doctor from './components/Doctor'
import Doctordetail from './components/Doctordetail'
import Bookdoctordone from './components/Bookdoctordone'
import History from './components/History'
import Appointment from './components/Appointment'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/home/:uid" component={Home} exact />
      <Route path="/hospital/book" component={Bookhospitaldone} exact />
      <Route path="/bloodbank/book" component={Bookbloodbankdone} exact />
      <Route path="/hospitals" component={Hospital} exact />
      <Route path="/hospital/:hospid" component={Hospitaldetail} exact />
      <Route path="/bloodbanks" component={Bloodbank} exact />
      <Route path="/bloodbank/:bbid" component={Bloodbankdetail} exact />
      <Route path="/doctors" component={Doctor} exact />
      <Route path="/doctor/book" component={Bookdoctordone} exact />
      <Route path="/doctor/:uid" component={Doctordetail} exact />
      <Route path="/history/:uid" component={History} exact />
      <Route path="/appointments/:uid" component={Appointment} exact />

      

      

    </Switch>
  
      
    </div>
    </Router>
  );
}

export default App;
