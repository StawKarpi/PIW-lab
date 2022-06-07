import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Student.css";

const Student = (props) => {
  const { name, picture, description, tags, subject } = props.data;

  const aboutUser = () => {
    localStorage.setItem("userPage", JSON.stringify(props.data));
    console.log(props.data);
  };

  return (
    <Card>
      <CardContent>
        <Link to={"/" + name} onClick={() => aboutUser()}>
          <img className="profile-picture" alt="picture" src={picture}></img>
        </Link>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          <span>Przedmiot:</span>
          {subject}
        </Typography>
        <Typography sx={{ mb: 0.7 }} variant="body2">
          {description}
        </Typography>

        <Box>
          <span>Tagi: </span>
          {tags.map((key, id) => (
            <span
              style={{
                background: "pink",
                padding: 2,
                margin: 2,
                borderRadius: 4,
              }}
            >
              {key}
            </span>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Student;
