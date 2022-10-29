import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter,Link, Route } from 'react-router-dom'

const Home = () => <div>
  <p>Componente Home</p>
  <Link to="/login">Visitar página de login</Link>
</div>

const Login = () => <div>
    <p>Componente Login</p>
    <Link to="/">Voltar para a página inicial</Link>  
  </div>

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={Home}/>
    <Route path="/login" component={Login}/>
  </BrowserRouter>,
  document.querySelector('#root')
)