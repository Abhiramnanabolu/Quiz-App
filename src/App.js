import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './Components/Home'
import Start from './Components/Start'
import Quiz from './Components/Quiz'
import NotFound from './Components/NotFound'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

// Replace your code here
const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/play" component={Home} />
        <Route exact path="/play/:category" component={Quiz}/>
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
  </BrowserRouter>
  
)
export default App

