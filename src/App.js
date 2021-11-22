import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { useAuthCtx } from "./store/AuthContext";
import AddPage from "./pages/AddPage";
import { Link } from "react-router-dom";

function App() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <div className="container">
      <Toaster />
      <Navbar />
      <Switch>
        {!isLoggedIn && (
          <Route path="/login">
            <LoginPage />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path="/register">
            <RegisterPage />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/home">
            <HomePage />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/add">
            <AddPage />
          </Route>
        )}
        <Route exact path="/">
          <h1>Welcome </h1>
        </Route>
        <Route path="*">
          <h2>OOPS page not found 404</h2>
          <Link to="/login">Login here</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
