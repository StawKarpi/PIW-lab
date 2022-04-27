import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Student = (props) => {
  const { name, description, tags, subject } = props.data;

  return (
    <Card>
      <CardContent>
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
