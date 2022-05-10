import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default class Group extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { name, members, description, tags, subject } = this.props.data;
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <span>Członkowie: </span>
            {members.map((key, id) => (
              <span style={{ margin: 2 }}>{key}</span>
            ))}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <span>Przedmiot:</span>
            {subject}
          </Typography>
          <Typography sx={{ mb: 0.7 }}>{description}</Typography>

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
  }
}
