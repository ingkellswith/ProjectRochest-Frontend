import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./container/home/HomeContainer";
import Footer from "./container/footer/FooterContainer";
import Header from "./container/header/HeaderContainer";
import Products from "./container/products/ProductsContainer";
import ProductDetail from "./container/products/ProductDetailContainer";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact component={Products} />
        <Route path="/product/:id" component={ProductDetail} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
