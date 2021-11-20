import { Route, BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import NavBar from './components/UI/NavBar/NavBar';
import Products from "./containers/Products/Products";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Product from "./containers/Product/Product";
import NewProduct from "./containers/NewProduct/NewProduct";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <NavBar />
        <Route exact path="/" component={Products} />
        <Route path="/products/new" component={NewProduct} />
        <Route path="/product/:id" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
