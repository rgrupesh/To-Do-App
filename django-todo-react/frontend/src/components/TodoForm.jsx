import React from "react";
import { Container, TextField, Button, FormControl } from "@material-ui/core";

const TodoForm = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <form>
          <FormControl fullWidth={true}>
            <TextField label="Enter Todo" />
            <Button variant="contained" color="primary">
              Add Todo
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default TodoForm;
