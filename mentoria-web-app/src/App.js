import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PageIndex from './PageIndex';
import PageLogin from './PageLogin';
import PagedeCadastro from './PageCadastro';
import PagedeAjuda from './PagedeAjuda';
import { isAuthenticated } from './auth';
import OnboardingFunction from './components/Onboarding';



const OnboardingRoute = ({component: Component, ...rest}) => (
  < Route 
    {... rest} 
      render = { props => 
        isAuthenticated() ? (
        <Component {...props} />
         ) : (
          <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
      )
    } 
  />
);


function App() {
  return (
   <div>



<BrowserRouter>
      <Switch>
      <OnboardingRoute  exact path='/' component={OnboardingFunction} />
      <Route path="/home" component= {PageIndex} />
      <Route path="/login" component={PageLogin} />
      <Route path="/cadastro" component={PagedeCadastro} />
      <Route path="/ajuda" component={PagedeAjuda} />

    
      
      </Switch>
      </BrowserRouter>
    

</div>
    
     );
  }


export default App;
