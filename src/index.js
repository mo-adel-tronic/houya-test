import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import AuthProvider from "./AuthProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
  <Footer />
 </>
);
