import * as React from 'react';

import { Route, Switch } from 'react-router-dom'

import BaseType from './pages/baseType'
import Variable from './pages/variableDeclaration'
import Interface from './pages/interface'
import AboutClass from './pages/aboutClass'
import Func from './pages/func'

class GetRouter extends React.Component {
    public render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={BaseType} />
                    <Route exact path="/Variable" component={Variable} />
                    <Route exact path="/interface" component={Interface} />
                    <Route exact path="/aboutClass" component={AboutClass} />
                    <Route exact path="/func" component={Func} />
                </Switch>
            </div>
        )
    }
}
export default GetRouter;
    
