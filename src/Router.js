import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomeContainer from "./container/home/HomeContainer";
/* import Header from "./Header"; */

function Router() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
