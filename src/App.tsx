import {BrowserRouter} from "react-router-dom";
import Routes from "Routes";
import GlobalStyle from "styles/GlobalStyle";


function App() {
  return (
    <BrowserRouter>

     <GlobalStyle/>
     <Routes/>
     
    </BrowserRouter>
  );
}

export default App;
