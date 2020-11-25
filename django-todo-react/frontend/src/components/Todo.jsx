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

const Todo = () => {
  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          style={{ color: "black", marginTop: 10, background: "lightgrey" }}
        >
          <CardContent>
            <Typography variant="h5">
              <IconButton>
                <CheckIcon />
              </IconButton>
              Coursera GAN
              <IconButton style={{ float: "right" }}>
                <DeleteIcon />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo;
