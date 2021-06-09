import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PageIndex from '../src/pages/PageIndex';
import PageLogin from '../src/pages/PageLogin';
import { isAuthenticated } from './auth';
import { Provider } from 'react-redux';
import storeCadastro from './store/cadastroDados';
import OnboardingComponent from './components/OnboardingComponent';
import { GlobalStyle } from './styles/style';
import PagedeCadastro from '../src/pages/PagedeCadastro';
import { coresGlobais } from '../src/styles/style';
import { ThemeProvider } from 'styled-components';
import StepErro from './components/StepsCadastro/StepErro';
import { auth } from './firebaseConfig';
import PagedeAjuda from './PagedeAjuda';
import CardCompleted from './components/Filters/CardCompleted';
import CardPage from './components/Filters/CardPage';
import CardTest from './components/Filters/CardTest';
import PagePergunta from './pages/PagePergunta';

const OnboardingRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const logar = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        const user = {
          uid: userAuth.uid,
          email: userAuth.email,
        };

        setUser(user);
      } else {
        setUser(null);
      }
    });
    return logar;
  }, []);

  return (
    <ThemeProvider theme={coresGlobais}>
      <GlobalStyle />

      <BrowserRouter>
        <Switch>
          <OnboardingRoute exact path="/" component={OnboardingComponent} />
          <Provider store={storeCadastro}>
            <Route exact path="/login" component={PageLogin} />
            <Route exact path="/teste" component={CardPage} />
            <Route exact path="/testando" component={PagedeAjuda} />
            <Route exact path="/question" component={PagePergunta} />
            <Route exact path="/cadastro" component={PagedeCadastro} />
            {user ? (
              <Route exact path="/home" component={PageIndex} />
            ) : (
              <StepErro />
            )}
          </Provider>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
