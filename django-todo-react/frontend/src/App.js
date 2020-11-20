import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  button: {
    color: "white",
    background: "black",
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <form>
    <TextField id="outlined-basic" label="Task" variant="outlined"/>
    </form>
      <Button className={classes.button} variant="contained">
        Add task
      </Button>
    </div>
  );
};

export default App;
