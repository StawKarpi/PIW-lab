import React, { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email] = useState("");

  const [loggedIn, setLogged] = useState("");

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const dataUsers = JSON.parse(localStorage.getItem("users"));
  const dataLogged = JSON.parse(localStorage.getItem("loggedIn"));

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
      {dataLogged !== null ? (
        <div>
          <h2>Jesteś zalogowany</h2>
          <button
            onClick={() => {
              setCurrentUser(null);
              localStorage.setItem("loggedIn", null);
              setLogged(null);
            }}
          >
            Wyloguj
          </button>
        </div>
      ) : (
        <div>
          <label class="addLabel"> Nazwa użytkownika: </label>
          <input
            placeholder={"Login"}
            className="addInput"
            onChange={loginHandler}
          />
          <label class="addLabel"> Hasło: </label>
          <input
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
        </div>
      )}
    </div>
  );
};

export default Login;
