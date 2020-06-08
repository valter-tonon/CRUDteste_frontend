import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Cadastro from './Pages/Cadastro'
import Update from './Pages/Update'

const Routes = ()=>(
    <Switch>
        <Route path = '/' exact component={Home}/>
        <Route path = '/cadastro' component={Cadastro}/>  
        <Route path = '/editar&:id' component={Update}/>
    </Switch>
)

export default Routes