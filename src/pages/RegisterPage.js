import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [loggedIn, setLogged] = useState("");

  const data = JSON.parse(localStorage.getItem("users"));
  const dataLogged = JSON.parse(localStorage.getItem("loggedIn"));

  const setUserNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const addNewUser = () => {
    const newUser = {
      userName: userName,
      password: password,
      email: email,
    };

    data.push(newUser);
    localStorage.setItem("users", JSON.stringify(data));
  };

  return (
    <div>
      {dataLogged !== null ? (
        <div>
          <h2>Masz już konto</h2>
        </div>
      ) : (
        <div>
          <label class="addLabel"> Nazwa użytkownika: </label>
          <input
            placeholder={"Nazwa"}
            className="addInput"
            onChange={setUserNameHandler}
          />
          <label class="addLabel"> Hasło: </label>
          <input
            placeholder={"Hasło"}
            className="addInput"
            onChange={setPasswordHandler}
          />
          <label class="addLabel"> E-mail: </label>
          <input
            placeholder={"E-mail"}
            className="addInput"
            onChange={setEmailHandler}
          />
          <button class="addButton" onClick={addNewUser}>
            Zarejestruj
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;
