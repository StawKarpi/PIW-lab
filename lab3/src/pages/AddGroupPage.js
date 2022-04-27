import React, { useState } from "react";
// import input from "@mui/material/input";
import "./AddPage.css";

const AddGroupPage = () => {
  const [name, setName] = useState("");
  const [members, setMembers] = useState("[]");
  const [emails, setEmails] = useState("[]");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [tags, setTags] = useState("[]");

  const data = JSON.parse(localStorage.getItem("groups"));

  const setNameHandler = (e) => {
    setName(e.target.value);
  };

  const setEmailsHandler = (e) => {
    setEmails(e.target.value);
  };

  const setMembersHandler = (e) => {
    setMembers(Array.from(e.target.value.split(",")));
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

  const addNewGroup = () => {
    const newGroup = {
      name: name,
      members: members,
      emails: emails,
      description: description,
      subject: subject,
      tags: tags,
    };

    data.push(newGroup);
    localStorage.setItem("groups", JSON.stringify(data));
  };

  return (
    <div>
      <label class="addLabel">Nazwa grupy:</label>
      <input label={"Nazwa grupy"} class="addInput" onChange={setNameHandler} />
      <label class="addLabel">Członkowie:</label>
      <input
        label={"Członkowie"}
        class="addInput"
        onChange={setMembersHandler}
      />
      <label class="addLabel">E-mail:</label>
      <input label={"E-mail"} class="addInput" onChange={setEmailsHandler} />
      <label class="addLabel">Opis:</label>
      <input label={"Opis"} class="addInput" onChange={setDescriptionHandler} />
      <label class="addLabel">Przedmiot:</label>
      <input
        label={"Przedmiot"}
        class="addInput"
        onChange={setSubjectHandler}
      />
      <label class="addLabel">Tagi (po przecinku):</label>
      <input label={"Tagi"} class="addInput" onChange={setTagsHandler} />
      <button class="addButton" onClick={addNewGroup}>
        Dodaj
      </button>
    </div>
  );
};
export default AddGroupPage;
