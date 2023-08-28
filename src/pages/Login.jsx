import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/userDetailsSlice";
import { get_api } from "../service";

const Login = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initial credentials data
  const initialCredentials = {
    username: "testLogin",
    password: "t3stP@ssw0rd",
  };

  const [credentials, setCredentials] = useState(initialCredentials);
  const [error, setError] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      credentials.username === initialCredentials.username &&
      credentials.password === initialCredentials.password
    ) {
      get_api(
        `0b140ce8-5cf9-414f-bbda-06965e6d728d?username=${credentials.username}&password=${credentials.password}`,
        function (res) {
          const auth = res.data.auth;
          updatefetch(auth);
          localStorage.setItem("isLoggedIn", auth);
          dispatch(setLogin(auth));
          navigate("/dashboard");
        }
      );
    } else {
      setError(true);
    }
  };

  // Redirect to home if already logged in
  useEffect(() => {
    if (isLoggedIn === 1) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

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
  return (
    <div className="container container--login mt-5">
      <div className="row">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Login</h3>
            {error && (
              <div className="error-block">Please enter valid credentials.</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  value={credentials.username}
                  className="form-control"
                  id="username"
                  onChange={(event) =>
                    setCredentials({
                      ...credentials,
                      username: event.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={credentials.password}
                  className="form-control"
                  id="password"
                  onChange={(event) =>
                    setCredentials({
                      ...credentials,
                      password: event.target.value,
                    })
                  }
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
