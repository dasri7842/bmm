import { Redirect, Route, Switch } from "react-router-dom";
import pages from "./helpers/pages";
import Navbar from "./components/Navbar";
import Offline from "./components/Offline";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {navigator.onLine ? (
        <div className="container-lg mt-4">
          <Switch>
            {pages.map((item, indx) => (
              <Route
                path={item.pageLink}
                exact
                component={item.component}
                key={indx}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </div>
      ) : (
        <Offline />
      )}
    </div>
  );
};

export default App;
