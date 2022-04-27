import React, { useState } from "react";
import Student from "../components/Student";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const StudentsPage = () => {
  const [searchOption, setSearchOption] = useState("desc");
  const data = JSON.parse(localStorage.getItem("students"));

  const handleChange = (e) => {
    setSearchOption(e.target.value);
  };

  //   console.log(studata);
  console.log(data);

  const [searchTerm, setSearchTerm] = useState("");

  //   props.setStudentsData([StudentsData]);

  const searchData = () => {
    if (searchOption === "desc") {
      return searchDataDescription();
    } else if (searchOption === "subj") {
      return searchDataSubject();
    } else if (searchOption === "tags") {
      return searchDataTags();
    }
  };

  const searchDataDescription = () => {
    return data.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    });
  };

  const searchDataSubject = () => {
    return data.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.subject.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    });
  };

  const searchDataTags = () => {
    return data.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.tags.some((element) =>
          element.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ) {
        return val;
      }
    });
  };

  return (
    <div className="AllStudents">
      <div>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Select
          value={searchOption}
          label="Wyszukaj po..."
          onChange={handleChange}
          size="small"
        >
          <MenuItem value={"desc"}>Opis</MenuItem>
          <MenuItem value={"subj"}>Przedmiot</MenuItem>
          <MenuItem value={"tags"}>Tagi</MenuItem>
        </Select>
      </div>
      <div className="AllAds">
        {searchData().map((d) => {
          return <Student data={d} />;
        })}
      </div>
    </div>
  );
};

export default StudentsPage;
