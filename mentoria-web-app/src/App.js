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

console.log('ola');
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../public/firebase-messaging-sw')
    .then(function (registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function (err) {
      console.log('Service worker registration failed, error:', err);
    });
  navigator.serviceWorker.ready.then(registration => {
    registration.showNotification('Helloo!');
    console.log('ola');
  });
}

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
  const [user, setUser] = useState(null);
  useEffect(() => {
    const logar = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth.uid,
        email: userAuth.email,
      };
      if (userAuth) {
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
            <Route exact path="/teste" component={StepErro} />
            <Route exact path="/testando" component={PagedeAjuda} />
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
