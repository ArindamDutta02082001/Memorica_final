import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Operation from './opera'
import Showall from './showall'
import Home from './home'
import Getid from './id'
const Master = () => {
  return (
<Router>
        <Switch>
            <Route exact path='/opera' ><Operation/></Route>
            <Route exact path='/' ><Home></Home></Route>

            <Route exact path='/showrec' ><Showall/></Route>

            <Route exact path='/id' ><Getid/></Route>
        </Switch>
    </Router>

  )
}

export default Master
