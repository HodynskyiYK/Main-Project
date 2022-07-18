import React, {FC} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { Home } from './pages'
import { PageNotFound } from './pages'
import { Search } from './pages'

export const App: FC = () => {

    return (
        <Router>
            <Switch>
                <Redirect
                    from={'/'}
                    to={'/search'}
                    exact
                />
                <Route path={'/'} exact>
                    <Home/>
                </Route>
                <Route path={'/search'}>
                    <Search/>
                </Route>
                <Route path={'*'}>
                    <PageNotFound/>
                </Route>
            </Switch>
        </Router>
    )
}
