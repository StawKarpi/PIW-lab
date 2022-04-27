import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const AddStudentPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [tags, setTags] = useState("[]");

  const data = JSON.parse(localStorage.getItem("students"));

  const setNameHandler = (e) => {
    setName(e.target.value);
  };

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const setDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const setSubjectHandler = (e) => {
    setSubject(e.target.value);
  };

  const setTagsHandler = (e) => {
    setTags(Array.from(e.target.value.split(",")));
  };

  const addNewStudent = () => {
    const newStudent = {
      name: name,
      email: email,
      description: description,
      subject: subject,
      tags: tags,
    };

    data.push(newStudent);
    localStorage.setItem("students", JSON.stringify(data));
  };

  return (
    <div>
      <TextField
        label={"Imię i nazwisko"}
        variant="outlined"
        className="addTextField"
        onChange={setNameHandler}
      />
      <TextField
        label={"E-mail"}
        variant="outlined"
        className="addTextField"
        onChange={setEmailHandler}
      />
      <TextField
        label={"Opis"}
        variant="outlined"
        className="addTextField"
        onChange={setDescriptionHandler}
      />
      <TextField
        label={"Przedmiot"}
        variant="outlined"
        className="addTextField"
        onChange={setSubjectHandler}
      />
      <TextField
        label={"Tagi"}
        variant="outlined"
        className="addTextField"
        onChange={setTagsHandler}
      />
      <button onClick={addNewStudent}>Dodaj</button>
    </div>
  );
};
export default AddStudentPage;
