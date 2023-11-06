import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HistoryPage from "./components/HistorialPage/HistoryPage";
import SearchPage from "./components/SearchPage/SearchPage";
import { CiudadesContextProvider } from "./context/CiudadesContext";

/**
 * Esta página web simula un buscador de información de un código postal con datos bastante simples
 * Este es mi primer proyecto con node y react y la finalidad de esta aplicación es aprender sobre el tratamiento de los datos de apis y los hooks de react
 * App que contiene el rotuer de la aplicación a sus diferentes páginas
 */
function App() {
  return (
    <CiudadesContextProvider>
      <Router>
      <Navbar></Navbar>
          <Switch>
              <Route exact path="/history">
                <HistoryPage/>
              </Route>
              <Route exact path="/" >
                <SearchPage/>
              </Route>
              <Route exact path="*">
                  <h1>Error 404: Page not found</h1>
              </Route>
          </Switch> 
      </Router> 
    </CiudadesContextProvider>
  );
}

export default App;
