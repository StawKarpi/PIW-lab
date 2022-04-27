import React, { useState } from "react";
import TextField from "@mui/material/TextField";

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

    // setStudentsData([...studentsData, newStudent]);
    data.push(newGroup);
    localStorage.setItem("groups", JSON.stringify(data));
  };

  return (
    <div>
      <TextField
        label={"Nazwa grupy"}
        variant="outlined"
        className="addTextField"
        onChange={setNameHandler}
      />
      <TextField
        label={"Członkowie"}
        variant="outlined"
        className="addTextField"
        onChange={setMembersHandler}
      />
      <TextField
        label={"E-mail"}
        variant="outlined"
        className="addTextField"
        onChange={setEmailsHandler}
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
      <button onClick={addNewGroup}>Dodaj</button>
    </div>
  );
};
export default AddGroupPage;
