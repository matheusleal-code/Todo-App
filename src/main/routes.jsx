import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import About from '../about/about'
import Todo from '../todo/todo'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect from="*" to="/todos" />
        </Switch>
    </BrowserRouter>
)