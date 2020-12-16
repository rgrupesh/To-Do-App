import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";

const Todo = ({ title, checkTodo,id }) => {
  
  const markComplete = () => checkTodo(id)

  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          style={{ color: "black", marginTop: 10, background: "lightgrey" }}
        >
          <CardContent>
            <Typography variant="h5">
              <IconButton onClick={markComplete}>
                <CheckIcon style={{ color: "green"}}/>
              </IconButton>
              {title}
              <IconButton style={{ float: "right" }}>
                <EditIcon style={{ color: "blue"}}/>
              </IconButton>
              <IconButton style={{ float: "right" }}>
                <DeleteIcon style={{ color: "red"}}/>
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
