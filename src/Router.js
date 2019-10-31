import React from 'react'
import { Switch, Route, WithRouter, Redirect } from 'react-router-dom'
import Destination from './destination/destination'
import { Links } from './links'
export const Router = () => {

    return (
        <Switch>

            <Route path="/destination/:name/:id" component={Destination} />
            <Route path="/destination" component={Links} />
            <Redirect to="/destination" />
        </Switch>
     )
}