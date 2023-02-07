import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import userImg from "./user.jpg";

export default function CharacterCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="440"
        image={userImg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
