import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useContext, useMemo } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GroupPage from "./pages/GroupPage";
import AddGroupPage from "./pages/AddGroupPage";
import StudentsPage from "./pages/StudentsPage";
import AddStudentPage from "./pages/AddStudentPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import axios from "axios";
import UserContext from "./contexts/UserContext";

function App() {
  const [studentsData, setStudentsData] = useState([]);

  const [currentUser, setCurrentUser] = useState(null);

  const value = useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser, setCurrentUser]
  );

  useEffect(() => {
    axios.get("http://localhost:3000/data/Students.json").then((res) => {
      const students = res.data;
      setStudentsData(students);
      console.log("got students");
    });
  }, []);

  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/data/Groups.json").then((res) => {
      const groups = res.data;
      setGroupData(groups);
      console.log("got groups");
    });
  }, []);

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/data/Users.json").then((res) => {
      const users = res.data;
      setUsersData(users);
      console.log("got users");
    });
  }, []);

  if (localStorage.getItem("loggedIn")) {
  } else {
    localStorage.setItem("loggedIn", null);
  }

  if (
    localStorage.getItem("students") &&
    localStorage.getItem("students") !== "[]"
  ) {
  } else {
    localStorage.setItem("students", JSON.stringify(studentsData));
  }

  if (
    localStorage.getItem("groups") &&
    localStorage.getItem("groups") !== "[]"
  ) {
  } else {
    localStorage.setItem("groups", JSON.stringify(groupData));
  }

  if (localStorage.getItem("users") && localStorage.getItem("users") !== "[]") {
  } else {
    localStorage.setItem("users", JSON.stringify(usersData));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={value}>
          <Navbar />

          <Routes>
            <Route path="/" element={<StudentsPage />} />
            <Route path="/:userName" element={<UserPage />} />
            <Route path="/addStudent" element={<AddStudentPage />} />
            <Route path="/groups" element={<GroupPage />} />
            <Route path="/addGroup" element={<AddGroupPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
