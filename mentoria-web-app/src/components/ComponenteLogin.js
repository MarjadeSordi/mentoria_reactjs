import BoaNoite from "./Componentedois";
import Bomdia from "./Componenteum";
import ReactDOM from 'react-dom';

function ComponenteLogin(props) {
    const isLoggedin = props.isLoggedin;
    
    if (isLoggedin) {
        <Bomdia />;
    }

    <BoaNoite />;

    }


    ReactDOM.render(
         <ComponenteLogin isLoggedin={true} />,
        document.getElementById('root')
      );


export default ComponenteLogin;
   


