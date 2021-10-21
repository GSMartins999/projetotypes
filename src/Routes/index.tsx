import {Switch, Route} from "react-router-dom";
import {Home} from 'Pages';

const Routes = () => {

    return (
     
        <Switch>

           <Route path="/" component={Home} />

        </Switch>

       

    )
}


export default Routes