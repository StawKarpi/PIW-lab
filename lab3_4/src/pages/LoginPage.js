import React, { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { auth } from "../firebase/init";
import {logInWithEmailAndPassword, logInWithFacebook, logInWithGoogle, logout } from "../firebase/users";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email] = useState("");

  const [loggedIn, setLogged] = useState("");

  const [user, loading, error] = useAuthState(auth);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const dataUsers = JSON.parse(localStorage.getItem("users"));
  const dataLogged = JSON.parse(localStorage.getItem("loggedIn"));

  const navigate = useNavigate();

  useEffect(() => {
    if (loading)
        return
    if (user)
        navigate("/login");
    if(error)
        console.error({error});
    }, [user, loading]);

  //   useEffect(() => {
  //     if (dataLogged !== null) {
  //       setLogged(JSON.parse(dataLogged));
  //     }
  //   });

  const loginHandler = (e) => {
    setLogin(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = () => {
    if (
      dataUsers.find((element) => {
        return element.userName === login, element.password === password;
      })
    ) {
      console.log("Login successful");
      return {
        login: login,
        password: password,
      };
    } else {
      console.log("Try again");
      return null;
    }
  };

  return (
    <div>
      {(dataLogged !== null) || user && (
        <div>
          <h2>Jesteś zalogowany</h2>
          <button
            onClick={// () => {
              logout
              // setCurrentUser(null);
              // localStorage.setItem("loggedIn", null);
              // setLogged(null);
            } // }
          >
            Wyloguj
          </button>
        </div>
      ) || (
        <div>
          <label class="addLabel"> Nazwa użytkownika: </label>
          <input
            placeholder={"Login"}
            className="addInput"
            onChange={loginHandler}
          />
          <label class="addLabel"> Hasło: </label>
          <input type="password"
            placeholder={"Hasło"}
            className="addInput"
            onChange={passwordHandler}
          />
          <button
            class="addButton"
            onClick={async () => {
              const user = await loginUser();
              setCurrentUser(user);
              console.log(user);
              localStorage.setItem("loggedIn", JSON.stringify(user));
              setLogged(user);
            }}
          >
            Zaloguj
          </button>
          <button class="addButton" onClick={logInWithGoogle}>
            Login with Google
        </button>
        <button class="addButton" onClick={logInWithFacebook}>
            Login with Facebook
        </button>
        </div>
      )}
    </div>
  );
};

export default Login;
