import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PageIndex from './PageIndex';
import PageLogin from '../src/pages/PageLogin';
import PagedeAjuda from './PagedeAjuda';
import PageNotFound from './PageNotFound';
import { isAuthenticated } from './auth';
import { Provider } from 'react-redux';
import storeCadastro from './store/cadastroDados';
import OnboardingComponent from './components/OnboardingComponent';
import { GlobalStyle } from './styles/style';
import PageDropdown from './PageDropdown';
import PageCheckBoxTag from './PageCheckBoxTag';
import ModalOnboarding from './ModalOnboarding';
import PagedeCadastro from '../src/pages/PagedeCadastro';
import { coresGlobais } from '../src/styles/style';
import { ThemeProvider } from 'styled-components';
import StepErro from './components/StepsCadastro/StepErro';

const OnboardingRoute = ({ component: Component, ...rest }) => (
  <Route
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
    <ThemeProvider theme={coresGlobais}>
      <GlobalStyle />

      <BrowserRouter>
        <Switch>
          <OnboardingRoute exact path="/" component={OnboardingComponent} />
          <Provider store={storeCadastro}>
            <Route exact path="/home" component={PageIndex} />
            <Route exact path="/login" component={PageLogin} />
            <Route exact path="/cadastro" component={PagedeCadastro} />
            <Route exact path="/dropdown" component={PageDropdown} />
            <Route exact path="/checkboxtag" component={PageCheckBoxTag} />
            <Route
              exact
              path="/testandoOnboarding"
              component={ModalOnboarding}
            />
            <Route exact path="/teste" component={StepErro} />
            <Route exact path="/ajuda" component={PagedeAjuda} />
          </Provider>

          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
