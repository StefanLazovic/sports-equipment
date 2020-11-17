import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Favorites from './components/Favorites'
import Orders from './components/Orders'
import NotFound from './components/NotFound'
import AddNew from './components/AddNew'

function Index() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/orders" component={Orders} />
        <Route path="/add" component={AddNew} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

if (document.getElementById('root')) {
  ReactDOM.render(<Index />, document.getElementById('root'))
}
