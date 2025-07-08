import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[300]}`,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));


function UserBox({ user }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar className={classes.avatar} alt={user.name} src={user.avatarUrl} />
      <div>
        <Typography variant="subtitle1">{user.name}</Typography>
        <Typography variant="body2">{user.email}</Typography>
      </div>
    </Box>
  );
}

function TestApp() {
    const user = {
      name: "John Doe",
      email: "john.doe@example.com",
      avatarUrl: "https://www.example.com/avatar.jpg",
    };
  
    return (
      <div>
        <UserBox user={user} />
      </div>
    );
  }
  
  export default TestApp;