import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { useStyles } from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.button} variant="contained">
        Add task
      </Button>
      <div className={classes.task}>
        <ButtonGroup>
          <Button>Completed</Button>
          <Button>Incomplete</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Home;
