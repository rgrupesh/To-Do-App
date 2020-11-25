import React from "react";
import { Container, TextField, Button, FormControl } from "@material-ui/core";

const TodoForm = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <form>
          <FormControl fullWidth={true}>
            <TextField label="Enter Todo" required={true} />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: 5 }}
            >
              Add Todo
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default TodoForm;
