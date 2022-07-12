import React, {FC} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './pages'
import { PageNotFound } from './pages/PageNotFound'
import { Search } from './pages/Search'

export const App: FC = () => {

    return (
        <Router>
            <Switch>
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
