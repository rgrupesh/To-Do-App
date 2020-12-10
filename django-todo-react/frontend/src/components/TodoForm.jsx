import React, {useState} from "react";
import { Container, TextField, Button, FormControl } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const TodoForm = ({addTodo}) => {
  const [text, setText] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <div>
      <FormControlLabel
        control={<Switch color="primary" />}
        label="Change theme"
      />
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth={true}>
            <TextField label="Enter Todo" required={true} value={text} onChange={e => setText(e.target.value)}/>
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
