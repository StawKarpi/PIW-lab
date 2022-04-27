import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GroupPage from "./pages/GroupPage";
import AddGroupPage from "./pages/AddGroupPage";
import StudentsPage from "./pages/StudentsPage";
import AddStudentPage from "./pages/AddStudentPage";

const StudentsData = [
  {
    name: "Stu Dent",
    email: "mail@email.mail",
    description:
      "Sympatyczny student drugiego roku szuka sympatycznego towarzysza lub towarzyszki do projektu z Baz Danych :-)",
    tags: ["SQL", "C#"],
    subject: "Bazy Danych 2",
  },
  {
    name: "W4ldemar",
    email: "e.mail@mail.e",
    description: "Zaliczam AK2 po raz czwarty, szukam kogoś do projektu",
    tags: ["assembler", "C"],
    subject: "Architektura Komputerów 2",
  },
];

const GroupData = [
  {
    name: "Grupa-Dupa",
    members: ["Robert Lewandowski", "Adam Małysz", "Robert Kubica"],
    description:
      "Szukamy czwartej osoby do projektu zespołowego. Apka mobilna. Więcej na priv.",
    tags: ["React Native", "JavaScript", "HTML", ".NET", "Docker"],
    subject: "Projekt zespołowy",
  },
  {
    name: "Dupa-Grupa",
    members: ["Robert Makłowicz"],
    description: "Cześć.",
    tags: ["tag", "czesc", ":)"],
    subject: "Przedmiot",
  },
];

function App() {
  //const [studentsData, setStudentsData] = useState(StudentsData);
  // localStorage.setItem("students", JSON.stringify(StudentsData));
  // let data = localStorage.getItem("students");

  if (localStorage.getItem("students")) {
  } else {
    localStorage.setItem("students", JSON.stringify(StudentsData));
  }

  if (localStorage.getItem("groups")) {
  } else {
    localStorage.setItem("groups", JSON.stringify(GroupData));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* </Routes><Route path="/" element={<>} /> */}
          <Route path="/" element={<StudentsPage />} />
          <Route path="/addStudent" element={<AddStudentPage />} />
          <Route path="/groups" element={<GroupPage />} />
          <Route path="/addGroup" element={<AddGroupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
