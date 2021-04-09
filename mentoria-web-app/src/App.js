import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PageIndex from './PageIndex';
import PageLogin from './PageLogin';
import PagedeCadastro from './PageCadastro';
import PagedeAjuda from './PagedeAjuda';
import PageNotFound from './PageNotFound';
import { isAuthenticated } from './auth';
import OnboardingFunction from './components/Onboarding';
import { Provider } from 'react-redux';
import store from './store';
import OnboardingComponent from './components/OnboardingComponent';
import { GlobalStyle } from './styles/style';
import PageDropdown from './PageDropdown';
import PageCheckBoxTag from './PageCheckBoxTag';



const OnboardingRoute = ({ component: Component, ...rest }) => (
  < Route
    {...rest}
    render={props =>
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

      <GlobalStyle />

      <BrowserRouter>
        <Switch>
          <OnboardingRoute exact path='/' component={OnboardingComponent} />
          <Provider store={store}>
            <Route exact path="/home" component={PageIndex} />
            <Route exact path="/login" component={PageLogin} />
            <Route exact path="/cadastro" component={PagedeCadastro} />
            <Route exact path="/dropdown" component={PageDropdown} />
            <Route exact path="/checkboxtag" component={PageCheckBoxTag} />
            <Route exact path="/ajuda" component={PagedeAjuda} />

          </Provider>

          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>


    </div>

  );
}


export default App;
