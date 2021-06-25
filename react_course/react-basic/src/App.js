import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import routes from './routes';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          {routes.map(routes=>{
            return(
              <Route key={routes.path} 
              path={routes.path} exact> 
              <routes.component/>
              </Route>
            )
          })}

        </Switch>
      </div>
    </Router>

  );
}

export default App;
