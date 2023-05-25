import { Route, Routes } from "react-router-dom";
import Wrapper from './layouts/wrapper/Wrapper';
import Home from "./pages/Home";
import Form from './components/Form';
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Form page='login' />} />
            <Route path="register" element={<Form page='register' />} />
            <Route path="generate-code/:num" element={<Form page='otp' />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
