import React from 'react';
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import Header from './components/Header'
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Footer from './components/Footer';

import './App.css';

function RequireAuth({ children }) {
  const token = localStorage.getItem("isLoggedIn");
  if (token !== "false") {
    updatefetch(token);
    return children;
  }
  return <Navigate to="/login" replace />;
}

function App() {
  const loggedInRedux = useSelector((store) => store.auth.isLoggedIn);
  return (
    <div className="rb-homepage-desktop">
      <Header isLoggedIn={loggedInRedux} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={loggedInRedux} />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard isLoggedIn={loggedInRedux} /></RequireAuth>} />
        <Route path="/login" element={<Login isLoggedIn={loggedInRedux} />} />
      </Routes>
      <Footer />
    </div>
  );
}
function updatefetch(token) {
  if (token) {
    window.fetch = new Proxy(window.fetch, {
      apply: function (target, that, args) {
        if (args[1]) {
          if (args[1].headers) {
            args[1].headers.Authorization = token;
          } else {
            args[1].headers = {
              Authorization: token,
            };
          }
        } else {
          args[1] = {
            headers: { Authorization: token },
          };
        }
        return target.apply(that, args);
      },
    });
    XMLHttpRequest = new Proxy(XMLHttpRequest, {
      construct: function (target, args) {
        const xhr = new target(...args);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 1) {
            xhr.setRequestHeader("auth", token);
          }
        };
        return xhr;
      },
    });
  }
}
export default App;
