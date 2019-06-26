import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Kingdoms from "./Kingdoms";
import Houses from "./Houses";
import Header from "../header/Header";
import Characters from './Characters';

export default class Routes extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={ Header }/>
                    <Route exact path="/kingdoms" component={ Kingdoms }/>
                    <Route exact path="/houses" component={ Houses }/>
                    <Route exact path="/characters" component={ Characters }/>
                </Switch>
            </HashRouter>
        )
    }
}