import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateAccount from "./pages/CreateAccount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const authToken = cookies.AuthToken;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {authToken && <Route path="/dashboard" element={<Dashboard />} />}
        {authToken && (
          <Route path="/create-account" element={<CreateAccount />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
