import React from "react";
import { Container, TextField, Button, FormControl } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const TodoForm = () => {
  return (
    <div>
      <FormControlLabel
        control={<Switch color="primary" />}
        label="Change theme"
      />
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
