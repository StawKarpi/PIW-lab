import { useState } from "react";
import Typography from "@mui/material/Typography";

const UserPage = () => {
  const data = JSON.parse(localStorage.getItem("userPage"));

  return (
    <div>
      <img className="profile-picture" alt="picture" src={data.picture}></img>
      <Typography variant="h3" component="div">
        {data.name}
      </Typography>
      <Typography variant="h6" component="div">
        <label style={{ fontSize: 15, margin: 2 }}>E-mail:</label>
        {data.email}
      </Typography>
    </div>
  );
};
export default UserPage;
