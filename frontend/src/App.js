import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/UI/NavBar/NavBar';
import Products from "./containers/Products/Products";
import './App.css';
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Product from "./containers/Product/Product";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Products} />
        <Route path="/product/:id" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route path="/albums" component={AlbumList} />
        <Route path="/album/:id" component={AlbumInfo} /> */}
      </Router>
    </div>
  );
}

export default App;
