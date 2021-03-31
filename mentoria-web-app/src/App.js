import React from 'react';
import Teste from './components/Teste';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageIndex from './PageIndex';
import PageLogin from './PageLogin';
import PagedeCadastro from './PageCadastro';
import PagedeAjuda from './PagedeAjuda';

function App() {
  return (
   <div>
     
<Teste />

<BrowserRouter>
      <Switch>
      
      <Route path="/" exact={true} component= {PageIndex} />
      <Route path="/login" component={PageLogin} />
      <Route path="/cadastro" component={PagedeCadastro} />
      <Route path="/ajuda" component={PagedeAjuda} />

    
      
      </Switch>
      </BrowserRouter>
    

</div>
    
     );
  }


export default App;
