import React, { useState } from "react";
// import input from "@mui/material/input";
import "./AddPage.css";

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
    if (name && email && description && subject && tags) {
      const newStudent = {
        name: name,
        picture: "http://picsum.photos/70/100",
        email: email,
        description: description,
        subject: subject,
        tags: tags,
      };
      data.push(newStudent);
      localStorage.setItem("students", JSON.stringify(data));
    }
  };

  return (
    <div>
      <label class="addLabel"> Imię: </label>
      <input
        placeholder={"Imię"}
        // variant="outlined"
        className="addInput"
        onChange={setNameHandler}
      />
      <label class="addLabel"> E-mail: </label>
      <input
        placeholder={"E-mail"}
        // variant="outlined"
        className="addInput"
        onChange={setEmailHandler}
      />
      <label class="addLabel"> Opis: </label>
      <input
        multiline
        placeholder={"Opis"}
        // variant="outlined"
        className="addInput"
        onChange={setDescriptionHandler}
      />
      <label class="addLabel"> Przedmiot </label>
      <input
        placeholder={"Przedmiot"}
        // variant="outlined"
        className="addInput"
        onChange={setSubjectHandler}
      />
      <label class="addLabel"> Tagi (po przecinku): </label>
      <input
        placeholder={"Tagi"}
        // variant="outlined"
        className="addInput"
        onChange={setTagsHandler}
      />
      <button class="addButton" onClick={addNewStudent}>
        Dodaj
      </button>
    </div>
  );
};
export default AddStudentPage;
