import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PageIndex from './PageIndex';
import PageLogin from './PageLogin';
import PagedeCadastro from './PageCadastro';
import PagedeAjuda from './PagedeAjuda';
import Modalteste from './Modalteste';
import { isAuthenticated } from './auth';
import Teste from './components/Teste';



const OnboardingRoute = ({component: Component, ...rest}) => (
  < Route 
    {... rest} 
      render = { props => 
        isAuthenticated() ? (
        <Component {...props} />
         ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    } 
  />
);


function App() {
  return (
   <div>



<BrowserRouter>
      <Switch>
      <OnboardingRoute path='/modal' component={Teste} />
      <Route exact path="/" component= {PageIndex} />
      <Route path="/modal"  component = {Modalteste} />
      <Route path="/login" component={PageLogin} />
      <Route path="/cadastro" component={PagedeCadastro} />
      <Route path="/ajuda" component={PagedeAjuda} />

    
      
      </Switch>
      </BrowserRouter>
    

</div>
    
     );
  }


export default App;
